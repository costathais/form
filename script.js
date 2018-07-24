let botao = document.querySelector("button");
let nome = document.querySelector("#nome");
let sobrenome = document.querySelector("#sobrenome");
let email = document.querySelector("#email");




botao.onclick = validaForm;

function validaForm() {
    if(nome.value == "" ||  sobrenome.value == "" || email.value ==""){    
        
        if (nome.value == "") {
            alert("Favor preencher o nome.")
        }
        if (sobrenome.value == "") {
            alert("Favor preencher o sobrenome.")
        }
        if (email.value == "") {
            alert("Favor preencher o email.")
        }       
    }
    else {
        alert(`Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, email: ${email.value}`);
    }
}