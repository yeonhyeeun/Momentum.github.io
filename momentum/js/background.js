const images = [
    "T1.jpeg",
    "T2.jpeg",
    "S1.jpeg"
]; 

const chosenImages = images[Math.floor(Math.random() * images.length)]; 

//createElement라는 js에서 html요소를 사용할 수 있도록 만드는 키워드 
const bgImage = document.createElement("img"); 

//백틱 사용하는것 잊지말기. 주의. html에서 img src 하는것과 비슷하게 코드 작성 
bgImage.src=`img/${chosenImages}`; 

//append는 가장 뒤에, prepand는 앞에 나오게 함 
document.body.appendChild(bgImage);