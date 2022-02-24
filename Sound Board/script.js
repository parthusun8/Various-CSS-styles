const sounds = [
    'applause',
    'boo',
    'gasp',
    'tada',
    'victory',
    'wrong'
];

let allowPlay = true;

const btn_cont = document.querySelector(".button-container");

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.innerText = sound;
    btn.addEventListener("click", ()=>{
        if(allowPlay){
            stopSongs();
            document.getElementById(sound).play();
        }
    });
    btn_cont.appendChild(btn);
});

const pause_btn = document.getElementById("pause");
pause_btn.addEventListener("click", ()=>{
    stopSongs();
    allowPlay = !allowPlay;
    if(allowPlay){
        pause_btn.innerHTML = `<i class="fa-solid fa-pause">`;
        pause_btn.style.backgroundColor = "#FF1F1F";
    } else{
        pause_btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        pause_btn.style.backgroundColor = "#2EFF1F";
    }
});

function stopSongs() {
    sounds.forEach((sound)=>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}