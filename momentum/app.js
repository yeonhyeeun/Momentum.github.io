// const loginForm = document.querySelector("#login-from");
const loginForm = document.getElementById("login-from");

//document가 아니라 loginForm에서 바로 찾을 수 있음 
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    //log전에 .dir로 속성 봐서 value를 써야하는것을 알게됨. 
    console.log(loginInput.value);
    console.log("click!!!");

}




loginButton.addEventListener("click",onLoginBtnClick);