const btn = document.getElementById("btn");

const notif_container = document.getElementById("notif-container");

btn.addEventListener("click", ()=> {
    createNotification();
});

function createNotification() {
    const notification = document.createElement('div');
    notification.classList.add("toast");
    notification.innerText = "Notification Goes Here";


    notif_container.appendChild(notification);

    setTimeout(()=>{notification.remove()}, 3000);
}
