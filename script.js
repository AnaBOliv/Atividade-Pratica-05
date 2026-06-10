const formulario =
document.getElementById(
    "cadastroForm"
);

const temaBtn =
document.getElementById(
    "temaBtn"
);

temaBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        temaBtn.textContent =
        document.body.classList.contains(
            "dark"
        )
        ? "☀️"
        : "🌙";
    }
);

formulario.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        limparErros();

        let valido = true;

        const nome =
        document.getElementById(
            "nome"
        ).value.trim();

        const email =
        document.getElementById(
            "email"
        ).value.trim();

        const senha =
        document.getElementById(
            "senha"
        ).value;

        if(nome === ""){

            document.getElementById(
                "erroNome"
            ).textContent =
            "Informe seu nome.";

            valido = false;
        }

        if(email === ""){

            document.getElementById(
                "erroEmail"
            ).textContent =
            "Informe seu e-mail.";

            valido = false;
        }
        else if(
            !email.includes("@")
            ||
            !email.includes(".")
        ){

            document.getElementById(
                "erroEmail"
            ).textContent =
            "E-mail inválido.";

            valido = false;
        }

        if(senha === ""){

            document.getElementById(
                "erroSenha"
            ).textContent =
            "Informe sua senha.";

            valido = false;
        }
        else if(
            senha.length < 6
        ){

            document.getElementById(
                "erroSenha"
            ).textContent =
            "A senha deve ter pelo menos 6 caracteres.";

            valido = false;
        }

        if(valido){

            document.getElementById(
                "mensagemSucesso"
            ).textContent =
            "✅ Cadastro realizado com sucesso!";

            formulario.reset();
        }
    }
);

function limparErros(){

    document.getElementById(
        "erroNome"
    ).textContent = "";

    document.getElementById(
        "erroEmail"
    ).textContent = "";

    document.getElementById(
        "erroSenha"
    ).textContent = "";

    document.getElementById(
        "mensagemSucesso"
    ).textContent = "";
}
