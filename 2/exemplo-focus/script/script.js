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
for(let i = 0; i < inputLevel.length; i++)  // descobrir o erro
    if(inputLevel[i].checked){
    console.log(inputLevel[i])
    radioItem = inputLevel[i]
}
// console.log(inputNews)
// console.log(inputNews.checked)
// console.log(inputNome.value)

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

}else if (inputPassword.value !== inputPassword.value)  {
    inputPassword.focus();
    return false;


}else if (cadastroInputNews.checked === false){
    alert("É uma pena que você não deseja receber nosso conteúdo exclusivo")
    return false;

}

// alert("Deu certo!!!")
//     return true;


})