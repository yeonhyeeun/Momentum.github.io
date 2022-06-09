// // // alert("hi"); 

// // // const myName ="Hyerong";

// // // console.log("hello " + myName); 

// // // const calculator ={
// // //     add : function(a,b) {
// // //         console.log(a + " + " + b + " = " + (a+b)); 
// // //     }, 
// // //     minus : function(a,b) {
// // //         console.log(a + " - " + b + " = " + (a-b)); 
// // //     }, 
// // //     divide : function(a,b) {
// // //         console.log(a + " / " + b + " = " + (a/b)); 
// // //     }, 
// // //     powerof : function(a,b) {
// // //         console.log(a + "** " + b + " = " + (a**b)); 
// // //     }, 
// // // }; 

// // // calculator.add(2,3); 
// // // calculator.minus(5,3); 
// // // calculator.divide(9,3); 
// // // calculator.powerof(2,3); 

// // // const age = parseInt( prompt("How old are you?") ); // prompt로 인해 js가 잠시 멈춤 
// // // //되게 옛날 스타일의 팝업임. html, css 적용도 못 하는. 요즘은 커스텀해서 만든다. 


// // // console.log(isNaN(age));

// // // if(isNaN(age)) {
// // //     console.log("Please write a number"); 
// // // } else {
// // //     console.log("Thankyou for writing your age. ")
// // // }

// // // if(isNaN(age) || age < 0) {
// // //     console.log("Please write a number or real positive number.")
// // // } else if( age <18) {
// // //     console.log("Too young");
// // // } else if(age >=18 && age <=50) {
// // //     console.log("can drink "); 
// // // } else if(age > 50 && age <= 80) {
// // //     console.log("should exercise"); 
// // // } else if(age > 80) {
// // //     console.log("can do anything!"); 
// // // }
// // // console.log("Your age is " + age); 

// // const title = document.querySelector("div.hello:first-child h1");

// // title.innerText = "Hello! Click me"; 

// // console.log(title); //html에는 title이라고 써져있어도 js에서 쓴 hello가 화면에 보인다. 
// // console.dir(title); 

// // // title.style.color = "blue"; 

// // // function handleTitleClick() {
// // //     console.log("title was clicked");
// // //     title.style.color = "blue"; 
// // //     title.innerText = "COOoooolll"; 
// // // }

// // // function handleTitleMO() {
// // //     console.log("title was mouseoverd");
// // //     title.style.color = "Red"; 

// // // }

// // function handleME() {
// //     console.log("MOUSE is here");
// //     title.innerText = "하지니"; 
// // }

// // function handleML() {
// //     console.log("MOUSE is GONE!!!");
// //     title.innerText = "바보"; 
// //     title
// // }

// // function handleTitleClick() {
// //     console.log("title was clicked");
// //     title.style.color = "blue"; 
// //     title.innerText = "메롱"; 
// // }


// // function handleWR() {
// //     document.body.style.backgroundColor = "tomato";
// // } 

// // function handleWC() {
// //     alert("copier!!"); 
// // }

// // function handleWOF() {
// //     alert("OMG it's offline!!"); 
// // }


// // function handleWON() {
// //     alert("Oh everyting is GOOD~"); 
// // }


// // // title.addEventListener("mouseover", handleTitleMO ); 

// // title.addEventListener("mouseenter", handleME); 
// // title.addEventListener("mouseleave", handleML); 
// // title.addEventListener("click", handleTitleClick); 

// // // window.addEventListener("resize", handleWR);
// // // window.addEventListener("copy", handleWC);
// // // window.addEventListener("offline", handleWOF);
// // // window.addEventListener("offline", handleWON);

// // const h1 = document.querySelector("div.hello:first-child h1");


// // function handleTitleClick() {
// //     // console.log(h1.style.color);
// //    // h1.style.color = "blue"; 
// //     // console.log(h1.style.color);

// //     const currentColor = h1.style.color; 
// //     let newColor; 

// //     if(currentColor === "blue") {
// //         newColor= "tomato"; 
// //     } 
// //     else {
// //         newColor = "blue";
// //     }
// //     h1.style.color = newColor; 
// // }

// // function handleME() {
// //     h1.innerText = "Mouse is here!"; 
// // }

// // h1.addEventListener("click", handleTitleClick)

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
// // const ClickedClass = "clicked"; 
// // h1.classList.toggle(ClickedClass); 

// //위 두문장을 아래 한문장으로도 바꿀수있음 
// h1.classList.toggle("clicked");

// //ClassList는 ClassName과 다르게 변경사항에 과거를 반영해준다. 한번에 무식하게 다 날려먹지 않음 
// //   if(h1.classList.contains(ClickedClass)) { 
// //       h1.classList.remove(ClickedClass); 
// //   } else {
// //       h1.classList.add(ClickedClass); 
// //   } 
// //위 조건문은 토글의 역할임. 
// }

// h1.addEventListener("click", handleTitleClick)

//새로 시작 APP

// const loginForm = document.getElementById("login-form");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function OnLoginSubmit() {
    // console.dir(loginInput); 
    // console.log("click"); 

    const username = loginInput.value;  
    console.log(username); 
    }

    loginForm.addEventListener("submit", OnLoginSubmit); 

// function ButClick() {
        // console.dir(loginInput); 
        // console.log("click"); 

//     if(username === "") {
//         alert("Please write your name."); 
//         console.log("Please write your name."); 
//     } else if (username.length > 15 ) {
//         alert("your name is too long.")
//     }
// }


loginButton.addEventListener("click", ButClick); 


//06.09 공부 내용 
// https://codesandbox.io/s/day-three-blueprint-forked-xpctgx?file=/src/index.js
