const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>لعبة الحلويات</title>
<style>
body{margin:0;background:linear-gradient(#ff9ec4,#ffd6e7);display:flex;justify-content:center;align-items:center;min-height:100vh;font-family:sans-serif}
.box{background:white;padding:15px;border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,0.2);text-align:center;width:340px}
canvas{background:#fff0f5;border-radius:15px;touch-action:none}
button{background:#ff4081;color:white;border:none;padding:10px 20px;border-radius:20px;font-size:18px;margin-top:10px}
</style></head><body>
<div class="box"><h2>🍬 لعبة الحلويات 🍭</h2><canvas id="c" width="300" height="400"></canvas><p>النقاط: <span id="s">0</span></p><button onclick="location.reload()">اعادة</button></div>
<script>
const canvas=document.getElementById('c'),ctx=canvas.getContext('2d');let score=0;let candies=[];
const colors=['#ff4081','#ffeb3b','#4caf50','#2196f3','#ff9800'];
function add(){candies.push({x:Math.random()*270+15,y:-20,r:15,c:colors[Math.floor(Math.random()*5)],v:2+Math.random()*3})}
function draw(){ctx.clearRect(0,0,300,400);candies.forEach((b,i)=>{ctx.fillStyle=b.c;ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,Math.PI*2);ctx.fill();b.y+=b.v;if(b.y>410)candies.splice(i,1)});requestAnimationFrame(draw)}
canvas.addEventListener('click',e=>{let rect=canvas.getBoundingClientRect();let x=(e.clientX-rect.left)*(300/rect.width);let y=(e.clientY-rect.top)*(400/rect.height);candies.forEach((b,i)=>{if(Math.hypot(b.x-x,b.y-y)<25){candies.splice(i,1);score++;document.getElementById('s').innerText=score}})});
setInterval(add,400);draw();
</script></body></html>`);
});
const server=app.listen(port,()=>console.log("شغال"));
server.keepAliveTimeout=120*1000;
server.headersTimeout=120*1000;
