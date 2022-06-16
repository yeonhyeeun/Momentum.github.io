const images = [
    "T1.jpeg",
    "T2.jpeg",
    "S1.jpeg"
]; 

const chosenImages = images[Math.floor(Math.random() * images.length)]; 

const bgImage = document.createElement("img"); 

bgImage.src=`img/${chosenImages}`; 

document.body.appendChild(bgImage);