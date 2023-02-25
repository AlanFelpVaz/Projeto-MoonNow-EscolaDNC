const inputs = document.querySelectorAll(".inputs")
const mensagemButton = document.querySelector("#msgButton")
const erroNome = document.querySelector("#erroNome")
const erroEmail = document.querySelector("#erroEmail")


function mostrarErroNome(){
    erroNome.innerHTML = "Não foi possível efetivar seu cadastro."
    erroNome.classList.add("msgErroInputs") 
}

function mostrarErroEmail(){
    erroEmail.innerHTML = "Não foi possível efetivar seu cadastro."
    erroEmail.classList.add("msgErroInputs") 
}
function removerErroNome() {
    erroNome.innerHTML = ""
    erroNome.classList.remove("msgErroInputs")
}
function removerErroEmail() {
    erroEmail.innerHTML = ""
    erroEmail.classList.remove("msgErroInputs")
}

function mostrarSucesso(){
    mensagemButton.innerHTML = "Cadastro efetuado com sucesso."
    mensagemButton.classList.remove("msgErroButton")
    mensagemButton.classList.add("msgSucesso")
}

function mostrarErro(){
    mensagemButton.innerHTML = "Não foi possível efetivar seu cadastro."
    mensagemButton.classList.remove("msgSucesso")
    mensagemButton.classList.add("msgErroButton");
}

function verificar(){
    for(let i = 0; i < inputs.length; i ++){
        if(inputs[0].value == ""){
            mostrarErroNome()
            mostrarErro()
        } else {
            removerErroNome()
        }
        if(inputs[1].value == ""){
            mostrarErroEmail()
            mostrarErro()
        } else {
            removerErroEmail()
        }

        if(inputs[i].value === ""){
            mostrarErro()
        } else {
            mostrarSucesso()
        }
        
    } 
}