const ham = document.querySelector("button");
const nav = document.querySelector("nav");

ham.addEventListener("click", ()=> {
    nav.classList.toggle("active");
    ham.classList.toggle("active");
});