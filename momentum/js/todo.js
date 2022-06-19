const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
//위 코드와 동일   = document.quertSelector("#todo-form input")
const toDoList = document.getElementById("todo-list"); 







function handleToDoSubmit(event) {
    event.preventDefault(); 
    console.log(toDoInput.value); 
    const newTodo = toDoInput.value; //비우기 전 미리 저장 
    toDoInput.value = ""; 
}

toDoForm.addEventListener("submit", handleToDoSubmit); 