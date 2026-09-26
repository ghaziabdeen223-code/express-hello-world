<!DOCTYPE html>
<html translate="no" class="notranslate">
<head>
<meta name="google" content="notranslate">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Ghazi PRO</title>
<style>
/* notranslate */
body{background:#0f0f0f;color:#fff;font-family:sans-serif;text-align:center;padding:15px}
.box{background:#1e1e1e;padding:20px;border-radius:15px;max-width:380px;margin:auto}
button{width:100%;padding:12px;background:#fff;color:#000;border:none;border-radius:8px;font-weight:bold;margin-top:10px}
img{max-width:100%;margin-top:10px;border-radius:8px}
</style>
</head>
<body>
<div class="box">
<h2>Ghazi PRO Cloud</h2>
<p>Image Converter</p>
<input type="file" id="f" accept="image/*">
<img id="p" style="display:none">
<canvas id="c" style="display:none"></canvas>
<button id="d" style="display:none">Download JPG</button>
</div>
<script>
// notranslate code
let f=document.getElementById('f'),p=document.getElementById('p'),c=document.getElementById('c'),d=document.getElementById('d'),x=c.getContext('2d');
f.onchange=e=>{
 let img=new Image();
 img.onload=()=>{c.width=img.width;c.height=img.height;x.drawImage(img,0,0);p.src=c.toDataURL();p.style.display='block';d.style.display='block';};
 img.src=URL.createObjectURL(e.target.files[0]);
};
d.onclick=()=>{let a=document.createElement('a');a.download='ghazi-pro.jpg';a.href=c.toDataURL('image/jpeg',0.9);a.click();};
</script>
</body>
</html>
