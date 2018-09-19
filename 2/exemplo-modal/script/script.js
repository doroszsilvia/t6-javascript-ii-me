const button = document.querySelector(".login__button");

button.addEventListener("click", function (event){
    event.preventDefault();

    const loginModal = document.querySelector(".login-modal");
    loginModal.style.display = "flex";
    button.Modal.style.display = "none";
})



