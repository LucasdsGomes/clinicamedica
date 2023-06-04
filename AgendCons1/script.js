document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

  
    var nomeCompleto = document.getElementById("exampleInputNome").value;
    var sobrenome = document.getElementById("exampleInputSobrenome").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var tipoExame = document.getElementById("exampleSelect").value;
    var mensagem = document.getElementById("exampleFormControlTextarea1").value;
  
    if (nomeCompleto.trim() === "" || sobrenome.trim() === "" || email.trim() === "" || tipoExame.trim() === "" || mensagem.trim() === "") {
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
  
    var celular = document.getElementById("validationCustom05").value;
    if (!validarNumeroCelular(celular)) {
      alert("Houve um problema. Por favor, insira um número de celular válido.");
      return;
    }
  
    exibirToastSucesso();
  });
  
  function exibirToastSucesso() {
    var nomeCompleto = document.getElementById("exampleInputNome").value;
    var sobrenome = document.getElementById("exampleInputSobrenome").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var tipoExame = document.getElementById("exampleSelect").value;
    var mensagem = document.getElementById("exampleFormControlTextarea1").value;
  
    if (nomeCompleto.trim() !== "" && sobrenome.trim() !== "" && email.trim() !== "" && tipoExame.trim() !== "" && mensagem.trim() !== "") {
      new bootstrap.Toast(document.getElementById("basicToast")).show();
      limparFormulario();
    }
  }
  
  function limparFormulario() {
    document.getElementById("exampleInputNome").value = "";
    document.getElementById("exampleInputSobrenome").value = "";
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("validationCustom05").value = "";
    document.getElementById("exampleSelect").value = "";
    document.getElementById("exampleFormControlTextarea1").value = "";
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
  