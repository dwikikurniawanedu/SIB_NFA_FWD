let container = document.getElementById("container");
let gambar = document.getElementById("gambar");
let clickCount = 0;

function tambahGambar() {
    clickCount++;
    if (clickCount === 1) {
        container.classList.remove("background-color");
        gambar.style.display = "block";
    } else {
        let imageContainer = document.createElement("image-container");

        if(imageContainer) {
            imageContainer = document.createElement("div");
            imageContainer.id = "image-container";
            document.body.appendChild(imageContainer);
        }
        let gambarBaru = document.createElement("img");
        gambarBaru.src = "3.jpg";
        gambarBaru.alt = "Gambar Baru";
        imageContainer.appendChild(gambarBaru);
    }
}

