const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//실수를 만들고 싶지않은 string 변수화 
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본 동작을 멈추게 함 ex.submit 
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; 
    // console.log(username);    
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, username); 
    
    paintGreetings(username); 
    // greeting.innerText = `Hello ${username}`; //윗줄과 같은 코드 
    // //맥 기준 : ``백틱 입력은 option누르고 ~키(원화)키 누르기 
    // greeting.classList.remove(HIDDEN_CLASSNAME); 
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


 
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    //show the form :비어있으니 작성할 form 주고 제출하도록 하기 
  loginForm.classList.remove(HIDDEN_CLASSNAME); 
  loginForm.addEventListener("submit", onLoginSubmit); 
} else {     //새로고침해도 이름 기억할 수 있도록 하기 
    paintGreetings(savedUsername); 
    //show the greetings - 나타날 greeting에 이름 저장해주기 
    // greeting.innerText = `Hello ${savedUsername}`; 
    // greeting.classList.remove(HIDDEN_CLASSNAME); //보이기 
}