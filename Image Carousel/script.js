const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("img");
let index = 0;

function run(){
    index++;

    if(index > img.length - 1){
        index = 0;
    }

    imgs.style.transform = `translateX(${-index*700}px)`;
}

setInterval(run, 2000);