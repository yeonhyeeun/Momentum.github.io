const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("Hello"); 
}

//setInterval 함수 1인자:실행하고싶은 함수, 2인자:몇초간격? 5000=5초 
setInterval(sayHello, 5000); 