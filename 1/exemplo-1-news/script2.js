const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function (event){
    event.preventDefault();
    //create element cria novos elementos
    const resposta = document.createElement("span");

    // creat text node cria nós de texto
    const respostaMensagem = document.createTextNode("E-mail cadastrado com sucesso!");

    // append child insere item dentro de um elemento
    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".news__form");


    // insert before insere item em um elemento antes de um item estabelcido
    newsForm.insertBefore(resposta, newsForm.childNodes[0]);



})