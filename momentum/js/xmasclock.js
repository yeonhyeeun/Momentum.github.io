// const clockTitle = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h3#xmasclock");


function getClock() {
  //크리스마스 이브 : 2022. 12. 24
  //크리스마스 : 2022. 12. 25 
  const Xmas = new Date("2022-12-25T00:00:00");
  const date = new Date(); //지금 날짜 - 계속 감소함

  //남은 시간
  const untilXmas = Xmas.getTime() - date.getTime();

  //day를 ms버전으로 변환 
  const DAY_MS_VER = 1000 * 60 * 60 * 24;

  //원하는 형식으로 표현하기 위한 변수 선언, 할당
  //1000=1ms, 60=1m, 60=1h, 24=1day 초,분,시,일 생각해서 계산
  //분, 시, 일 은 가능한 최대값 생각해서 다시 나눠주기
  const day = Math.floor(untilXmas / DAY_MS_VER);
  const hours = Math.floor((untilXmas % DAY_MS_VER ) / (1000 * 60 * 60));
  const minutes = Math.floor((untilXmas % DAY_MS_VER) / (1000 * 60));
  const seconds = Math.floor((untilXmas % (1000 * 60)) / 1000);

  //시,분,초 2자리수 맞추도록 0으로 패딩 주기
  const p_hours = String(hours).padStart(2, "0");
  const p_minutes = String(minutes).padStart(2, "0");
  const p_seconds = String(seconds).padStart(2, "0");

  clockTitle.innerText = (`${day}d ${p_hours}h ${p_minutes}m ${p_seconds}s`);
}

getClock(); 
setInterval(getClock, 1000);
