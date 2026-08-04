const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");

const noBtn=document.getElementById("noBtn");

const yesBtn=document.getElementById("yesBtn");

const doneBtn=document.getElementById("doneBtn");

const message=document.getElementById("message");

const messages=[
"😂 Nice try!",
"😜 Too slow!",
"🤣 Catch me!",
"🏃 Nope!",
"🤭 Almost!"
];

function moveButton(){

const maxX=window.innerWidth-noBtn.offsetWidth-20;

const maxY=window.innerHeight-noBtn.offsetHeight-20;

noBtn.style.position="fixed";

noBtn.style.left=Math.random()*maxX+"px";

noBtn.style.top=Math.random()*maxY+"px";

message.innerHTML=messages[Math.floor(Math.random()*messages.length)];

}

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveButton();

});

yesBtn.onclick=()=>{

page1.classList.add("hide");

page2.classList.remove("hide");

};

doneBtn.onclick=()=>{

const day=document.getElementById("day").value;

const time=document.getElementById("time").value||"Any time";

const activity=document.getElementById("activity").value;

page2.classList.add("hide");

page3.classList.remove("hide");

document.getElementById("summary").innerHTML=

`See you on <b>${day}</b><br>

At <b>${time}</b><br>

For <b>${activity}</b> 😄`;

};
