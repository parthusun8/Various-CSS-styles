let text = "AUTO-WRITE THIS TEXT LIKE A TYPEWRITER";

let index = 0;

function write(){

    document.body.innerText = text.slice(0, index);
    index++;

    if(index > text.length){
        index = 0;
    }

}

setInterval(write, 100);