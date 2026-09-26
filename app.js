const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ghazi | خبير شبكات</title>
<style>
body{font-family:Tahoma;background:#0a1931;color:white;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;padding:20px}
.card{background:white;color:#0a1931;border-radius:20px;padding:30px;max-width:400px;width:100%;text-align:center}
h1{margin:0 0 10px;font-size:26px}
ul{text-align:right;list-style:none;padding:0}
ul li{padding:10px 0;border-bottom:1px solid #eee} ul li::before{content:"✅ "}
.btn{display:block;padding:15px;border-radius:12px;text-decoration:none;font-weight:bold;margin:10px 0}
.btn1{background:#0a1931;color:white}
.btn2{background:#25D366;color:white}
</style>
</head>
<body>
<div class="card">
<h1>مرحبا انا غازي 👋</h1>
<p>مهندس شبكات وأنظمة حماية</p>
<ul>
<li>تصميم وتركيب شبكات - راوتر - سويتش</li>
<li>سيرفرات - فايرول - تأمين الشبكات</li>
<li>حماية وأنظمة مراقبة وكاميرات</li>
<li>تصميم مواقع إلكترونية احترافية</li>
<li>تصميم CV احترافي للسعودية والخليج</li>
<li>دعم فني للشركات والمؤسسات</li>
</ul>
<a class="btn btn1" href="https://wa.me/249110383760">تواصل واتساب 📲 00249110383760</a>
<a class="btn btn2" href="https://wa.me/249110383760">اطلب موقعك او CV الآن</a>
</div>
</body>
</html>`);
});

app.listen(port, () => {
  console.log('Server running');
});
