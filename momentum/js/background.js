const images = [
    // "T1.jpeg",
    // "T2.jpeg",
    // "S1.jpeg"
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg",
    "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg","19.jpeg"
]; 

const chosenImages = images[Math.floor(Math.random() * images.length)]; 

//createElement라는 js에서 html요소를 사용할 수 있도록 만드는 키워드 
const bgImage = document.createElement("img"); 

//백틱 사용하는것 잊지말기. 주의. html에서 img src 하는것과 비슷하게 코드 작성 
bgImage.src=`img/${chosenImages}`; 

//append는 가장 뒤에, prepand는 앞에 나오게 함 
document.body.appendChild(bgImage);