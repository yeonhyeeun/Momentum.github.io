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

  //11일차 js 과제 
  //제출일 06.17.
  //제출자 id : 0622yeon 

  //body.style.backgroundcolor-body태그를 사용하기 위해 body받아오기 
  const body = document.querySelector("body"); 

  //버튼 설정
  const colorBtn = document.querySelector("button");

  //이벤트 발생하는 함수 만들기 
  function changeColor() {
    //랜덤으로 바뀌는 색 고르기  
    const Color1 = colors[ Math.floor(Math.random() * colors.length)];
    const Color2 = colors[Math.round(Math.random() * colors.length)]; 

    //그라데이션 색 만들기 const gradientColor = `
   
    //배경에 적용하기 - 이렇게만 하면 배경이 여러개 그라데이션이 나온다. 왜지 ㅠㅠ 
    //-> 맨 앞에 속성으로 방향 설정을 해야하는거였다!!!! to right 을 적어주었다. 

    body.style.backgroundImage =  `linear-gradient(to right, ${Color1}, ${Color2})`;
    

    //색 변경되는지 콘솔에서 확인용 
    //console.log(gradientColor);    
    }
  
  // changeColor();
  colorBtn.addEventListener("click", changeColor);
