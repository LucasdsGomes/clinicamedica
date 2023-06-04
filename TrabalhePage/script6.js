document.getElementById("basicToastBtn").addEventListener("click", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("exampleInputNome").value;
    var sobrenome = document.getElementById("exampleInputNome2").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var telefone = document.getElementById("validationCustom05").value;
    var areaInteresse = document.querySelector("select").value;
    var curriculo = document.getElementById("exampleFormControlFile1").value;
  
    if (nome.trim() === "" || sobrenome.trim() === "" || email.trim() === "" || telefone.trim() === "" || areaInteresse.trim() === "" || curriculo.trim() === "") {
      alert("Houve um problema. Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    if (!validarEmail(email)) {
      alert("Houve um problema. Por favor, insira um endereço de e-mail válido.");
      return;
    }
  
    if (!validarTelefone(telefone)) {
      alert("Houve um problema. Por favor, insira um número de telefone válido.");
      return;
    }
  
    exibirToastSucesso();
  });
  
  function exibirToastSucesso() {
    new bootstrap.Toast(document.getElementById("basicToast")).show();
    limparFormulario();
  }
  
  function limparFormulario() {
    document.getElementById("exampleInputNome").value = "";
    document.getElementById("exampleInputNome2").value = "";
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("validationCustom05").value = "";
    document.querySelector("select").value = "";
    document.getElementById("exampleFormControlFile1").value = "";
    document.getElementById("exampleCheck1").checked = false;
  }

  document.getElementById("desfazer").addEventListener("click", function() {
    limparFormulario();
  });
   
  document.getElementById("desfazerenvio").addEventListener("click", function() {
    limparFormulario();
    alert("Envio deletado com sucesso!");
  });
  
  function validarEmail(email) {
    var emailValido = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com\.br|com|br|ifms\.edu\.br)$/;
    return emailValido.test(email);
  }
  
  function validarTelefone(telefone) {
    var telefoneValido = /^[1-9]{2}(?:\s?[2-9]){1}[0-9]{3,4}(?:\s?[0-9]{4})$/;
    return telefoneValido.test(telefone);
  }
  
  