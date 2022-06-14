const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginForm = document.getElementById("login-from");

const link = document.querySelector("a"); 

//document가 아니라 loginForm에서 바로 찾을 수 있음 
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본 동작을 멈추게 함 ex.submit 
    console.log(loginInput.value); //콘솔에 loginInput 변수가 가지는 value값을 보여라.  
}

function handleLinkClick() {

}

loginForm.addEventListener("submit", onLoginSubmit); 

link.addEventListener("click",handleLinkClick); 