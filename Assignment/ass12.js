async function loadImages() {
    const gallery = document.getElementById("gallery");

    for (let i = 0; i < 6; i++) {

        
        const response = await fetch("https://picsum.photos/300/200");
        console.log(response);
        
        const imgURL = response.url;
        console.log(imgURL);
        

        let box = document.createElement("div");
        box.className = "imgBox";

        let img = document.createElement("img");
        img.src = imgURL;

        box.appendChild(img);
        gallery.appendChild(box);

        img.onload = () => box.classList.add("fadeIn");
    }
}

document.getElementById("loadBtn").addEventListener("click", loadImages);


loadImages();
