//your code here
let images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
let selectedTiles = [];

function shuffleAndDisplayImages() {
    let duplicateIndex = Math.floor(Math.random() * images.length);
    let imagesWithDuplicate = [...images];
    imagesWithDuplicate.push(images[duplicateIndex]);
    imagesWithDuplicate.sort(() => Math.random() - 0.5);

    let container = document.getElementById("imageContainer");
    container.innerHTML = "";

    imagesWithDuplicate.forEach((imgSrc, index) => {
        let img = document.createElement("img");
        img.src = imgSrc;
        img.className = "tile";
        img.dataset.index = index;
        img.onclick = () => selectTile(img);
        container.appendChild(img);
    });
}

function selectTile(img) {
    if (selectedTiles.length < 2 && !selectedTiles.includes(img)) {
        selectedTiles.push(img);
        img.style.border = "2px solid red";
        document.getElementById("reset").style.display = "block";
        if (selectedTiles.length === 2) {
            document.getElementById("verify").style.display = "block";
        }
    }
}

function resetSelection() {
    selectedTiles.forEach(img => img.style.border = "2px solid black");
    selectedTiles = [];
    document.getElementById("reset").style.display = "none";
    document.getElementById("verify").style.display = "none";
    document.getElementById("para").textContent = "";
}

function verifySelection() {
    let [img1, img2] = selectedTiles;
    if (img1.src === img2.src) {
        document.getElementById("para").textContent = "You are a human. Congratulations!";
    } else {
        document.getElementById("para").textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    document.getElementById("verify").style.display = "none";
}

shuffleAndDisplayImages();
