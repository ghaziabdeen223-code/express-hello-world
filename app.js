const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ghazi - محول الصور العالمي</title>
<style>
body{font-family:sans-serif; background:#0f0f0f; color:#fff; text-align:center; padding:20px}
.card{background:#1e1e1e; padding:25px; border-radius:20px; max-width:400px; margin:auto}
input{margin:15px 0}
button{padding:12px 25px; background:#fff; color:#000; border:none; border-radius:10px; font-weight:bold; cursor:pointer; display:none}
#preview{max-width:100%; margin-top:15px; border-radius:10px; display:none}
</style>
</head>
<body>
<div class="card">
<h1>📸 Ghazi Converter</h1>
<p>حول أي صورة لـ JPG بضغطة</p>
<input type="file" id="upload" accept="image/*">
<img id="preview">
<br><br>
<button id="download">تحميل JPG ⬇️</button>
<p id="msg"></p>
</div>
<canvas id="canvas" style="display:none"></canvas>
<script>
const up=document.getElementById('upload'), cv=document.getElementById('canvas'), dl=document.getElementById('download'), pv=document.getElementById('preview'), msg=document.getElementById('msg');
up.onchange=e=>{
  const file=e.target.files[0];
  if(!file)return;
  const img=new Image();
  img.onload=()=>{
    cv.width=img.width; cv.height=img.height;
    cv.getContext('2d').drawImage(img,0,0);
    pv.src=cv.toDataURL('image/jpeg',0.8);
    pv.style.display='block';
    dl.style.display='inline-block';
    msg.innerText='جاهز للتحميل ✅';
  };
  img.src=URL.createObjectURL(file);
}
dl.onclick=()=>{
  const a=document.createElement('a');
  a.download='ghazi-'+Date.now()+'.jpg';
  a.href=cv.toDataURL('image/jpeg',0.9);
  a.click();
}
</script>
</body>
</html>`);
});

app.listen(port, ()=>console.log('Ghazi Image Ready'));
