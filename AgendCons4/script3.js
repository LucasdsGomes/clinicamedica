document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var tipoExame = document.getElementById("tipoExame").value;
    var dataExame = document.getElementById("dataExame").value;
    var observacoes = document.getElementById("observacoes").value;
    var cpf = document.getElementById("cpf").value;
    var planoUltraSaude = document.querySelector('input[name="planoUltraSaude"]:checked');


  
    if (nome.trim() === "" || sobrenome.trim() === "" || email.trim() === "" || cpf.trim() === "" || dataNascimento.trim() === "" || tipoExame.trim() === "" || dataExame.trim() === "" || observacoes.trim() === "") {
      alert("Houve um problema. Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    if (!validarNome(nome) || !validarNome(sobrenome)) {
      alert("Houve um problema. Por favor, insira um nome válido.");
      return;
    }
  
    if (!validarEmail(email)) {
      alert("Houve um problema. Por favor, insira um endereço de e-mail válido.");
      return;
    }
  
    if (!validarIdade(dataNascimento)) {
      alert("Houve um problema. Você deve ser maior de 18 anos para prosseguir.");
      return;
    }
  
    if (!validarDataExame(dataExame)) {
      alert("Houve um problema. Por favor, insira uma data válida do dia e mês atual.");
      return;
    }
  
    if (!planoUltraSaude || (planoUltraSaude.value !== "sim" && planoUltraSaude.value !== "nao")) {
      alert("Houve um problema. Por favor, selecione se você já assinou o plano UltraSaúde.");
      return;
    }

    if (!validarCPF(cpf)) {
        alert("Houve um problema. CPF inválido. Por favor, insira um CPF válido.");
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
    document.getElementById("email").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("tipoExame").value = "";
    document.getElementById("dataExame").value = "";
    document.getElementById("observacoes").value = "";
    document.getElementById("planoUltraSaudeSim").checked = false;
    document.getElementById("planoUltraSaudeNao").checked = false;
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
  
  function validarDataExame(dataExame) {
    var hoje = new Date();
    var dataSelecionada = new Date(dataExame);
    var diaAtual = hoje.getDate();
    var mesAtual = hoje.getMonth() + 1;
    var anoAtual = hoje.getFullYear();
    var diaSelecionado = dataSelecionada.getDate();
    var mesSelecionado = dataSelecionada.getMonth() + 1;
    var anoSelecionado = dataSelecionada.getFullYear();
  
    if (anoSelecionado !== anoAtual || mesSelecionado < mesAtual) {
      return false;
    } else if (mesSelecionado === mesAtual && diaSelecionado < diaAtual) {
      return false;
    }
  
    return true;
  }
  
  
  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
    
    var soma = 0;
    var resto;
    
    for (var i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
    
    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false;
    }
    
    soma = 0;
    
    for (i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
    
    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false;
    }
    
    return true;
  }
  