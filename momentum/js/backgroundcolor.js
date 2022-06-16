const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  //body.style.backgroundcolor를 사용하기 위해 body받아오기 
  const body = document.querySelector("body"); 

  //버튼 설정
  const colorBtn = document.querySelector("button");


  // changeColor();
  colorBtn.addEventListener("click", changeColor);


  function changeColor() {
    //랜덤으로 바뀌는 색 고르기  
    const randomColor = colors[ Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;

    //색 변경되는지 콘솔에서 확인용 
    //console.log(randomColor);    

  }
  
  