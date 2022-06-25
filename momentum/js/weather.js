//나의 API key 
const API_KEY = "38dfccd27e25b40a06146afd7414a21a"; 

function onGeoOk(position) {
    const lat = position.coords.latitude; 
    const long = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`; 
    
    //실제로 url에 들어갈 필요없이 JS가 대신 url을 불러오도록 함 ->fetch : 시간이 조금 걸린 후 작동 
    // fetch(url);
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.name, data.weather[0].main)
        const cityCon= document.querySelector("#weather span:first-child"); 
        const weatherCon = document.querySelector("#weather span:last-child"); 

        cityCon.innerText = data.name; 
        // const weather = data.weather[0].main; 
        weatherCon.innerText = `${data.weather[0].main} / ${data.main.temp}`;  

    } 
        ); 
    //console.log(url); 

    console.log("You live in ",lat,long); 
}
function onGeoError() {
    alert("Can't find you. no weather for you. "); 
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 