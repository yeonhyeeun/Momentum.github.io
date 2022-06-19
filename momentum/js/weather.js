const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";




function onGeoOk(position) {
    const lat = position.coords.latitude; 
    // const lng = position.coords.longitude; 
    // console.log("You live in", lat, log); 

    const lng = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("위치와 날씨를 찾을 수 없습니다. "); 
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); 