const quotes = [ 
    {
        quote : "나는 선한 목자라, 내가 내 양을 알고 양도 나를 아는 것이, 아버지께서 나를 아시고 내가 아버지를 아는 것 같으니, 나는 양을 위하여 목숨을 버리노라",
        author : "요한복음 10:14-15", 
    },
    {
        quote : "너희 중에 지혜와 총명이 있는 자가 누구뇨 그는 선행으로 말미암아 지혜의 온유함으로 그 행함을 보일찌니라",
        author : "야고보서 3:13", 
    },
    {
        quote : "화평케 하는 자들은 화평으로 심어 의의 열매를 거두느니라",
        author : "야고보서 3:18", 
    },
    {
        quote : "너희 안에 이 마음을 품으라 곧 그리스도 예수의 마음이니",
        author : "빌립보서 2:5", 
    },
    {
        quote : "여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다",
        author : "역대상 16:34", 
    },
    {
        quote : "형제를 사랑하여 서로 우애하고 존경하기를 서로 먼저 하며",
        author : "로마서 12:10", 
    },
    {
        quote : "네가 물 가운데로 지날 때에 내가 함께할 것이라 강을 건널 때에 물이 너를 침몰치 못할 것이며 네가 불 가운데로 행할 때에 타지도 아니할 것이요 불꽃이 너를 사르지도 못하리니",
        author : "이사야 43:2", 
    },
    {
        quote : "우리는 그의 만드신바라 그리스도 예수 안에서 선한 일을 위하여 지으심을 받은 자니 이 일은 하나님이 전에 예비하사 우리로 그 가운데서 행하게 하려 하심이니라",
        author : "에베소서 2:10", 
    },
    {
        quote : "모든 성경은 하나님의 감동으로 된 것으로 교훈과 책망과 바르게 함과 의로 교육하기에 유익하니",
        author : "디모데후서 3:16", 
    },
    {
        quote : "지존자의 은밀한 곳에 거하는 자는 전능하신 자의 그늘 아래 거하리로다",
        author : "시편 91:1", 
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.randon()을 사용하여 랜덤 float가짐, 
//Math.round()사용하여 소수점 아래 내리기 
//Math.ceil()사용하여 소수점 올리기 
//Math.floor()사용하여 소수점 버림  

// 배열의 랜덤 번째 가져오기 - 하드코딩 
// console.log(quotes[Math.floor(Math.random()*10)]); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;