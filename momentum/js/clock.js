const clock = document.querySelector("h2#clock");

const clockName = document.querySelector("h2#clockName")



function getClock() {
    const date = new Date(); 
    //string으로 형변환해야 padstart 가능 
    const hours = String(date.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0"); 
    const seconds = String(date.getSeconds()).padStart(2,"0");  

    clockName.innerText = "현재 시각 "   ; 
    clock.innerText = ("현재 시각", `${hours}:${minutes}:${seconds}`);
} 
//setInterval 함수 1인자:실행하고싶은 함수, 2인자:몇초간격? 5000=5초 
// setInterval(sayHello, 5000); 

//setTimeout 위와 비슷하게 사용, 한번만 보여줌 
// setTimeout(sayHello,5000);

getClock(); //바로 보기 위해 미리 작동 
setInterval(getClock, 1000);

//padStart()-앞에 추가, padEnd()-뒤에 추가 배움 
