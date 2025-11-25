let images = [
    "https://picsum.photos/id/101/400/250",
    "https://picsum.photos/id/102/400/250",
    "https://picsum.photos/id/103/400/250",
    "https://picsum.photos/id/104/400/250",
    "https://picsum.photos/id/105/400/250"
];

let imgBox = document.getElementById("imgBox");
let index = 0;


document.getElementById("nextBtn").addEventListener("click", () => {
    index++;
    if (index >= images.length) index = 0;
    imgBox.src = images[index];
});


document.getElementById("prevBtn").addEventListener("click", () => {
    index--;
    if (index < 0) index = images.length - 1;
    imgBox.src = images[index];
});


let autoSlide = setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    imgBox.src = images[index];
}, 3000);

imgBox.addEventListener("mouseover", () => {
    clearInterval(autoSlide);
});

imgBox.addEventListener("mouseout", () => {
    autoSlide = setInterval(() => {
        index++;
        if (index >= images.length) index = 0;
        imgBox.src = images[index];
    }, 3000);
});
