const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginForm = document.getElementById("login-from");

//document가 아니라 loginForm에서 바로 찾을 수 있음 
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본 동작을 멈추게 함 ex.submit 

// function onLoginBtnClick() {
    //log전에 .dir로 속성 봐서 value를 써야하는것을 알게됨. 
    // console.log(loginInput.value);
    // console.log("click!!!");

    //if-else 문을 사용한 유효성 검사 
    // const username = loginInput.value;
    // if( username === "") {
    //     alert("Please write your name");
    //     console.log("Please write your name");
    // } else if( username.length > 15 ){
    //     alert("Too long name!");
    // }

    //html에서 기존에 만들어진 조건을 사용하여 간략화. (required, max-length ...)
    console.log(loginInput.value); //콘솔에 loginInput 변수가 가지는 value값을 보여라.  
}

loginForm.addEventListener("submit", onLoginSubmit); 


// loginButton.addEventListener("click",onLoginBtnClick);