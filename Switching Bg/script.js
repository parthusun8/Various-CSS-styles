let color = "black";
let opposite = "white";
const btn = document.querySelector("input");
const text = document.createElement('span');
text.innerHTML = `Light Mode`;

btn.addEventListener("click", () => {
    text.innerHTML = '';
    document.body.style.backgroundColor = color;
    document.body.style.color = opposite;

    if(color == "white"){
        text.innerText = `Light Mode`;
        color = "black";
        opposite = "white";
    }
    else{
        text.innerText = `Dark Mode`;
        color = "white";
        opposite = "black";
    }
    document.body.appendChild(text);

});

document.body.appendChild(text);
