const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
//위 코드와 동일   = document.quertSelector("#todo-form input")
const toDoList = document.getElementById("todo-list"); 


function paintToDo(newTodo) {
    // console.log("i will paint", newTodo);  //인자 잘 받는지 확인 
    //Js에서 html 만들기 아래 코드 
    const li = document.createElement("li"); //createElement의 변수는 html 태그여야한다. 
    const span = document.createElement("span"); 
    li.appendChild(span); //리스트 밖에서 만들어진 span을 li안으로 넣기 
    span.innerText = newTodo; //스판에 항목의 텍스트를 넣어주기 
    // console.log(li); 
    toDoList.appendChild(li); //미리 만들어둔 html리스트 자리에 Js로 만든 리스트를 넣어주기 super coooool
    
}




function handleToDoSubmit(event) {
    event.preventDefault(); 
    // console.log(toDoInput.value); 
    const newTodo = toDoInput.value; //비우기 전 미리 저장 
    toDoInput.value = ""; 
    paintToDo(newTodo); //인자 전달 
}

toDoForm.addEventListener("submit", handleToDoSubmit); 