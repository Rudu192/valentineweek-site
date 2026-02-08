
const correctPassword="ILOVEYOU";

function checkPassword(){
  const val=document.getElementById('passwordInput').value;
  if(val===correctPassword) window.location='letters.html';
  else document.getElementById('errorText').innerText='Wrong password 😢';
}

const letters=[
["2026-02-07","Rose Day 🌹","Hiieeeeeee 🌹 My love blooms like roses for youuu...<br><br>I LOVE YOU SO MUCH YOU MEAN THE WORLD TO ME MY CHASMISH - From Rudu"],
["2026-02-08","Propose Day 💍","Hiiiii babyyyy 💍 I choose you foreverrrr...<br><br>I LOVE YOU SO MUCH YOU MEAN THE WORLD TO ME MY CHASMISH - From Rudu"],
["2026-02-09","Chocolate Day 🍫","Helloooo sweetieee 🍫 You are sweeter than chocolates...<br><br>I LOVE YOU SO MUCH YOU MEAN THE WORLD TO ME MY CHASMISH - From Rudu"],
["2026-02-10","Teddy Day 🧸","Huggiesss🧸 my cutu sonaaiii you are myyy choto teddyyy bear mwwwaaaaahhhhhhhhhhhh...<br><br>I LOVE YOU SO MUCH YOU MEAN THE WORLD TO ME MY CHASMISH - From Rudu"],
["2026-02-11","Promise Day 🤞","Pinky promise foreverrr 🤞...<br><br>I LOVE YOU SO MUCH YOU MEAN THE WORLD TO ME MY CHASMISH - From Rudu"],
["2026-02-12","Hug Day 🤗","Biggest huggg for youuu 🤗...<br><br>I LOVE YOU SO MUCH YOU MEAN THE WORLD TO ME MY CHASMISH - From Rudu"],
["2026-02-13","Kiss Day 😘","Muaaaahhh 😘 A million kisses...<br><br>I LOVE YOU SO MUCH YOU MEAN THE WORLD TO ME MY CHASMISH - From Rudu"],
["2026-02-14","Valentine's Day ❤️","Happy Valentine's Dayyy ❤️ You are my everything...<br><br>I LOVE YOU SO MUCH YOU MEAN THE WORLD TO ME MY CHASMISH - From Rudu"]
];

function loadLetters(){
  const grid=document.getElementById('lettersGrid');
  if(!grid) return;
  letters.forEach(l=>{
    const card=document.createElement('div');
    card.className='card';
    const unlock = new Date(l[0] + "T00:00:00+05:30");
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    if(now>=unlock){
      card.innerHTML=`<h3>${l[1]}</h3>`;
      card.onclick=()=>openLetter(l[2]);
    }else{
      card.innerHTML="🔒 Locked";
    }
    grid.appendChild(card);
  });
}

function openLetter(text){
  document.getElementById('letterText').innerHTML=text;
  document.getElementById('modal').style.display='flex';
}
function closeModal(){document.getElementById('modal').style.display='none';}

window.onload=()=>{loadLetters();bgAnim();};

function bgAnim(){
  const c=document.getElementById('bg');
  const ctx=c.getContext('2d');
  c.width=window.innerWidth;c.height=window.innerHeight;
  const hearts=Array.from({length:60},()=>({x:Math.random()*c.width,y:Math.random()*c.height,s:Math.random()*20+10}));
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    hearts.forEach(h=>{ctx.fillText('💖',h.x,h.y);h.y-=0.5;if(h.y<0)h.y=c.height;});
    requestAnimationFrame(draw);
  }
  draw();
}
