const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputLevel = document.getElementById("level");
const inputNews = document.getElementById("cadastroInputNews");


const button = document.querySelector(".cadastro__button");

button.addEventListener("click", function (event){
    event.preventDefault();

    const optionSelect = inputArea.options[inputArea.selectIndex]

    let radioItem;
    for(let i = 0; i < inputLevel.length; i++){
        if(inputLevel[i].checked){
    //console.log(inputLevel[i])
        radioItem = inputLevel[i]
    }
    if(radioItem.value === "Junior"){
        console.log("0 - 2 anos de experiencia;")
        }else if (radioItem.value === "Pleno"){
            console.log("2 - 5 anos de experiencia;")
        }else if (radioItem.value === "Senior"){
            console.log("+5 anos de experiencia;")

        }

    if( inputNome.value === "" || inputNome.value === undefined){
        inputNome.focus();
            return false;

    }else if (inputEmail.value === "" || inputEmail.value === undefined ){
        inputEmail.focus();
            return false;
        
    }else if (inputEmailConfirm.value === "" || inputEmailConfirm.value === undefined){
        inputEmailConfirm.focus();
            return false;

    }else if (inputPassword.value === "" || inputPassword.value === undefined){
        inputPassword.focus();
            return false;

    }else if (inputPasswordConfirm.value === "" || inputPasswordConfirm.value === undefined){
        inputPasswordConfirm.focus();
            return false;

    }else if (inputPhone.value === "" || inputPhone.value === undefined){
        inputPhone.focus();
            return false;

    } else if (inputEmail.value !== inputEmailConfirm.value){
        inputEmail.focus();
        return false;

    }else if (inputPassword.value !== inputPasswordConfirm.value){
        inputPassword.focus();
        return false;

    }else if (inputPassword.value.length <= 7) {
        alert("sua senha deve ter 7 ou mais caracteres")
        inputPassword.focus();
        return false;

    }else if (inputPasswordConfirm.value.length !== inputPasswordConfirm.value)  {
        inputPassword.focus();
        return false;


    }else if (cadastroInputNews.checked === false){
        alert("É uma pena que você não deseja receber nosso conteúdo exclusivo")
        return false;

    }
    document.querySelector("body").style.backgroundColor = "#fff";
    const form = this.closest("form");
    form.submit();

    })


inputArea.addEventListener("change", function(){
    if(inputArea.selectedIndex === 0){
        document.querySelector("body").style.backgroundColor = "#e3f2d";
    }else if(inputArea.selectedIndex === 1){
        document.querySelector("body").style.backgroundColor = "#f1f8e9";
    }else if(inputArea.selectedIndex === 2){
        document.querySelector("body").style.backgroundColor = "#fce4ec";
    }else if(inputArea.selectedIndex === 3){
        document.querySelector("body").style.backgroundColor = "#ffecb3";
    }
})