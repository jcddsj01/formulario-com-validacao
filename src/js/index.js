const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmacaoSenha = document.getElementById("confirmacao-de-senha");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const valorUsuario = usuario.value.trim();
    const valorEmail = email.value.trim();
    const valorSenha = senha.value.trim();
    const valorConfirmacaoSenha = confirmacaoSenha.value.trim();

    if (valorUsuario === "") {
        setErrorFor(usuario, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(usuario);
    }

    if (valorEmail === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(valorEmail)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (valorSenha === "") {
        setErrorFor(senha, "A senha é obrigatória.");
    } else if (valorSenha.length < 7) {
        setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(senha);
    }

    if (valorConfirmacaoSenha === "") {
        setErrorFor(confirmacaoSenha, "A confirmação de senha é obrigatória.");
    } else if (valorConfirmacaoSenha !== valorSenha) {
        setErrorFor(confirmacaoSenha, "As senhas não conferem.");
    } else {
        setSuccessFor(confirmacaoSenha);
    }

    const controlesFormulario = formulario.querySelectorAll(".controle-de-formulario");

    const formularioValido = [...controlesFormulario].every((controleFormulario) => {
        return controleFormulario.classList.contains("sucesso");
    });

    if (formularioValido) {
        alert("Cadastro realizado com sucesso!");
    }
}

function setErrorFor(input, mensagem) {
    const controleFormulario = input.parentElement;
    const small = controleFormulario.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = mensagem;

    // Adiciona a classe de erro
    controleFormulario.classList.remove("sucesso");
    controleFormulario.classList.add("erro");
}

function setSuccessFor(input) {
    const controleFormulario = input.parentElement;

    // Adiciona a classe de sucesso
    controleFormulario.classList.remove("erro");
    controleFormulario.classList.add("sucesso");
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}