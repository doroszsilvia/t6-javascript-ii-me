const inputNome = document.getElementById("contatoInputNome");
const inputEmail = document.getElementById("contatoInputEmail");
const inputPhone = document.getElementById("contatoInputPhone");
const inputMessage = document.getElementById("contatoInputMessage");

const button = document.querySelector(".contato__button");

button.addEventListener("click", function (event){
    event.preventDefault();

    // inputNome.value === undefined;
    // inputNome.value === null;
    // inputNome.value === "";       // ver se está vazio
    // inputNome.value === " ";      // ver se tem espaçamento

    // inputEmail.value === undefined;
    // inputEmail.value === null;
    // inputEmail.value === "";   
    // inputEmail.value === " ";    

    // inputPhone.value === undefined;
    // inputPhone.value === null;
    // inputPhone.value === "";   
    // inputPhone.value === " ";  

    // inputMessage.value === undefined;
    // inputMessage.value === null;
    // inputMessage.value === "";   
    // inputMessage.value === " ";  

    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
        inputNome.focus();
        return false;

    }else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
        inputEmail.focus();
        return false; 

    }else if(inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " "){
        inputPhone.focus();
        return false; 

    }else if(inputMessage.value === undefined || inputMessage.value === null || inputMessage.value === "" || inputMessage.value === " "){
        inputMessage.focus();
        return false;
    }
    alert("Deu certo!!!")
    return true;

})


// addEventListener -> é um metodo, devolve uma ação depois do click
// focus cria a borda azul, quando há o click 
