const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
//위 코드와 동일   
// const toDoInput = document.quertSelector("#todo-form input")
const toDoList = document.getElementById("todo-list"); 

const TODOS_KEY = "todos"; 

//투두 항목들을 저장할 배열 선언 - const가 아니라 let으로!!! todos배열은 계속 바뀌기 때문 
let toDos = []; 

//todo항목을 로컬 스토리지에 저장하기 - 단 배열형태는 로컬 스토리지에 저장할 수 없음 
function saveToDos() {
    // localStorage.setItem("todos", toDos); 
    //todos라는 키에 toDos값들이 텍스트로 저장된다. 우리는 이걸 String(object 형식)으로 바꾸고 싶다. 
    //이때 사용하는 것이 JSON.stringify() 메소드 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 

    }


//todo항목 삭제하기 
function deleteToDo(event) {
    //target은 클릭된 html element다. 
    // console.dir(event.target.parentElement.innerText); //레전드 코드  
    const li = event.target.parentElement; //우리가 삭제하고 싶은 투두 항목 
    li.remove(); 
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos(); 
}


//투두 만들기 힘수 
function paintToDo(newTodo) {
    // console.log("i will paint", newTodo);  //인자 잘 받는지 확인 
    //Js에서 html 만들기 아래 코드 
    const li = document.createElement("li"); //createElement의 변수는 html 태그여야한다. 
    li.id = newTodo.id; //id 넣어주기 
    const span = document.createElement("span"); 
    span.innerText = newTodo.text; //스판에 항목의 텍스트를 넣어주기 뉴투두의 텍스트 부분을 가져올 것이기 때문 

    const button = document.createElement("button"); 
    button.innerText = "❌"; 
    button.addEventListener("click",deleteToDo); 

    //appent는 맨 마지막에 나와야해! 
    li.appendChild(span); //리스트 밖에서 만들어진 span을 li안으로 넣기 
    li.appendChild(button); 
    toDoList.appendChild(li); //미리 만들어둔 html리스트 자리에 Js로 만든 리스트를 넣어주기 super coooool
}

//submit함수  
function handleToDoSubmit(event) {

    event.preventDefault(); 

    // console.log(toDoInput.value); 
    const newTodo = toDoInput.value; //비우기 전 미리 저장(복사) 
    toDoInput.value = ""; 

    const newTodoObj = {
        text : newTodo, 
        // 랜덤 아이디 만들어주기 - 각각의 항목들을 구별하기 위해 
        id : Date.now(), 
    }; 
    
    //배열에 푸시 해주기 
    toDos.push(newTodoObj); 
    paintToDo(newTodoObj); //인자 전달 - 기존 text전달에서 객체 전달로 수정 
    saveToDos(); //전달했으면 저장하기 - 저장 함수 수행 
}


//아래 코드에서 for each문을 통해 간결화함 
// function sayHello(item) {
//     console.log("this is the turn of", item); 
// }

const savedToDos = localStorage.getItem(TODOS_KEY); 

// console.log(savedToDos); 
if (savedToDos !== null) {
    //배열 형식으로 형변환 된 투두 항목들을 parsedTodos에 할당
    const parsedToDos = JSON.parse(savedToDos); 
    //배열의 기본 메서드 forEach 사용 
    // console.log(parsedToDos); 

    toDos = parsedToDos; 

    //배열에 있는 각각의 items들이 sayHello함수를 실행시킴
    //forEach()를 사용함으로써 (즉, 배열의 아이템 개수만큼 함수가 실행됨)
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    parsedToDos.forEach(paintToDo); 
    //forEach함수는 이 paintToDO를 parsedTodos 배열의 요소마다 실행한다. 
    }

toDoForm.addEventListener("submit", handleToDoSubmit); 

// Filter에 대한 간단한 설명 주석 처리 
// function sexyFilter(item) {
//     return item !== 3; 
//     //새로 만들 배열에서 3만 빼고 넣고 싶을때 
       //함수가 하는 일은 질문을 던지는 것이다 혹은 항목을 제외할지.
    // 함수 내부가 true가 되는 것들만 새 배열에 들어감  
// }
// [1,2,3,4].filter(sexyFilter) => 위 코드의 결과 [1,2,4] 
//should return true -> 새 배열에서 해당 항목을 유지하고 싶다면 