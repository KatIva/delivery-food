const cartButton = document.querySelector("#card-button"); // при нажатии на кнопку
const modal = document.querySelector(".modal");  // открывает корзину
const close = document.querySelector(".close");  // закрывает корзину

cartButton.addEventListener("click", function(event) {   // открывает корзину
    modal.classList.add("is-open");
});
close.addEventListener("click", function(event) {   // закрывает корзину
    modal.classList.remove("is-open");
});

new WOW().init();  // активация скрипта WOW

// сокращенная версия открытия и закрытия

// cartButton.addEventListener("click", toggleModal);
// close.addEventListener("click", toggleModal);

// function toggleModal(){
//     modal.classList.toggle("is-open");
// }