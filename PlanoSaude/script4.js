document.getElementById("basicToastBtn").addEventListener("click", function(event) {
    event.preventDefault();
  
    var nomeCompleto = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var telefone = document.getElementById("validationCustom05").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var dataNascimento = document.getElementById("data").value;
    var observacoes = document.getElementById("observacoes").value;
  
    if (nomeCompleto.trim() === "" || sobrenome.trim() === "" || telefone.trim() === "" || email.trim() === "" || dataNascimento.trim() === "" || observacoes.trim() === "") {
      alert("Houve um problema. Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    if (!validarNome(nomeCompleto) || !validarNome(sobrenome)) {
      alert("Houve um problema. Por favor, insira um nome e sobrenome válidos.");
      return;
    }
  
    if (!validarEmail(email)) {
      alert("Houve um problema. Por favor, insira um endereço de e-mail válido.");
      return;
    }
  
    if (!validarNumeroCelular(telefone)) {
      alert("Houve um problema. Por favor, insira um número de telefone válido.");
      return;
    }
  
    if (!validarIdade(dataNascimento)) {
      alert("Houve um problema. Menores de 18 anos não podem assinar um plano.");
      return;
    }
  
    exibirToastSucesso();
  });
  
  function exibirToastSucesso() {
    new bootstrap.Toast(document.getElementById("basicToast")).show();
    limparFormulario();
  }
  
  function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("validationCustom05").value = "";
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("data").value = "";
    document.getElementById("observacoes").value = "";
  }

  document.getElementById("desfazer").addEventListener("click", function() {
    limparFormulario();
  });
   
  document.getElementById("desfazerenvio").addEventListener("click", function() {
    limparFormulario();
    alert("Envio deletado com sucesso!");
  });
  
  function validarNome(nome) {
    var nomeValido = /^[a-zA-ZÀ-ÿ\s]+$/;
    return nomeValido.test(nome);
  }
  
  function validarEmail(email) {
    var emailValido = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com\.br|com|br|ifms\.edu\.br)$/;
    return emailValido.test(email);
  }
  
  function validarNumeroCelular(celular) {
    var numValido = /^[1-9]{2}9?[0-9]{8}$/;
    return numValido.test(celular);
  }
  
  function validarIdade(dataNascimento) {
    var hoje = new Date();
    var dataNasc = new Date(dataNascimento);
    var idade = hoje.getFullYear() - dataNasc.getFullYear();
    var mes = hoje.getMonth() - dataNasc.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }
    return idade >= 18;
  }
  