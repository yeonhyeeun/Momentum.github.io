const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); 
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

//setInterval 함수 1인자:실행하고싶은 함수, 2인자:몇초간격? 5000=5초 
// setInterval(sayHello, 5000); 

//setTimeout 위와 비슷하게 사용, 한번만 보여줌 
// setTimeout(sayHello,5000);
getClock(); 
setInterval(getClock, 1000);