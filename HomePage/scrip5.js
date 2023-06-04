document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      var nome = document.getElementById("validationCustom01").value;
      var sobrenome = document.getElementById("validationCustom02").value;
      var email = document.getElementById("exampleInputEmail1").value;
      var feedback = document.getElementById("exampleFormControlTextarea1").value;
      var resposta = document.getElementById("exampleInputPassword1").value;
      var concordou = document.getElementById("invalidCheck").checked;
  
      if (nome.trim() === "" || sobrenome.trim() === "" || email.trim() === "" || feedback.trim() === "" || resposta.trim() === "" || !concordou) {
        alert("Por favor, preencha todos os campos obrigatórios e concorde com os termos e condições.");
        return;
      }
  
      if (!validarEmail(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
      }
  
      if (!validarResposta(resposta)) {
        alert("A resposta para a pergunta de segurança está incorreta.");
        return;
      }
  
      exibirToastSucesso();
    });
  
    function exibirToastSucesso() {
      var toastElement = document.getElementById("basicToast");
      var toastInstance = new bootstrap.Toast(toastElement);
      toastInstance.show();
      limparFormulario();
    }
  
    function limparFormulario() {
      document.getElementById("validationCustom01").value = "";
      document.getElementById("validationCustom02").value = "";
      document.getElementById("exampleInputEmail1").value = "";
      document.getElementById("exampleFormControlTextarea1").value = "";
      document.getElementById("exampleInputPassword1").value = "";
      document.getElementById("invalidCheck").checked = false;
    }
  
    function validarEmail(email) {
      var emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailValido.test(email);
    }
  
    function validarResposta(resposta) {
      var respostaCorreta = "4";
      return resposta === respostaCorreta;
    }
  });
  