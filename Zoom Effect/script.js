const photo = document.getElementById("container");
const img = document.querySelector("img");

photo.addEventListener("mousemove", (e)=>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    // console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2.2)";
});

photo.addEventListener("mouseleave", ()=>{
    img.style.transformOrigin = 'center center';
    img.style.transform = "scale(1)";
});