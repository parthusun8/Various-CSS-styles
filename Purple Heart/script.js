function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add("heart");

    heart.style.left = Math.random()*100 + 'vw';
    // console.log(heart.style.left);

    heart.style.animationDuration = Math.random()*2 + 3 + "s";

    heart.innerText = "💜";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createHeart, 300);