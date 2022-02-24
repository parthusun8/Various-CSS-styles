const image = document.querySelector("img");
let hover = false;
const container = document.querySelector(".hover-container");

container.addEventListener("mouseover", () => {
    if(!hover){
        container.innerHTML = '';
        const videoNode = document.createElement("div");
        videoNode.classList.add("hover-container");
        videoNode.innerHTML = `
            <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/ZYzbalQ6Lg8?&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media;"
            ></iframe>

            <h1>SPIDER MAN NO WAY HOME</h1>
        `;

        container.appendChild(videoNode);
    }

    hover = true;
    
});

container.addEventListener("mouseout", ()=>{

    hover = false;
    container.innerHTML = '';
    const imageNode = document.createElement("div");
    imageNode.classList.add("hover-container");
    imageNode.innerHTML = `<img src="https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg">`;

    
  
    container.appendChild(imageNode);
});