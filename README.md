## JS를 사용한 Momentum clone! 



# JS_study remind  
JS스터디 기록  
date : 06 / 08 Recap 2~3.  
[2].  
return => replacing  
const : do not allow the data update. <-> let : allow update  / var : (please) never use!!  
undefinded : exist but empty, ex) let hello;  
push : in to the end of array. 
array in JS : can get any data type in one array.  
get item in object => ex) player.name  
object 만든 후에도 new property 추가 가능  
function에 건내줄때 many many argument doesn't matter.  

date : 06 / 13 Recap 4.  
[0~1]  
항상 user가 입력한 값의 유효성을 확인하는 코드를 짜는 것은 좋은 연습이다.  
그러나 js에서 유효성 검사 코드를 짜기 전에 이에 해당하는 html 제공 속성이 있는지 알아보기.  
html에서 유효성 검사를 하기 위해서는 input이 form태그 안에 있어야 한다.  
또한, html form안에서 enter/버튼을 누르고, input값이 더 존재하지 않는다면, 자동으로 submit된다.  

date 06 /16 Recap 6.1  
여태 코딩한 것과 반대로 js에서 html요소를 만들어낼 수 있다!! 유.레.카. super cool. 



date : 06 / 19. 
Reacp 3.7 super recap-login form, .hidden&event에 관하여  
(크롬에)localStorage를 db개념으로 이용하면 굳이 내가 만든 함수에 매개변수를 통해 변수를 전해 줄 필요가 없을때도 있다.  
필요한 랜덤의 범위가 0~4일 경우, Math.random() * N(필요한 개수)을 한다. 이때 N은 0부터 랜덤출력의 최대값까지의 개수(예제의 경우 : 5)가 된다.  


date : 06 / 20.  
Recap #7.0  
form은 submit event를 가진다.  
해당강의의 실습이 이전 실습과 공통된 내용 : submit event를 받고, 기본 동작을 받고 input에서 value를 얻어낸다. 오늘의 강의에서 유일한 차이점은 paintToDo()를 호출한다는 것  
#7.2  
event propert는 target을 가지는데, 어떤 button이 클릭되었는지를 보여준다.(우리가 필요한 것이 이것!)  
property에서 parentNote는 누가 이 버튼의 부모인지를 알려준다.  
#7.4  
JS allows you to execute a function for each item on that array!!! (coool)  
