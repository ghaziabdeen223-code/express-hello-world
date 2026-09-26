const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req,res)=>{
res.send(`
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Ghazi PRO - #1 Free Image Converter Worldwide</title>
<meta name="description" content="Free online image converter to JPG PNG WEBP AVIF. Fast, secure, no upload needed.">
<meta name="keywords" content="image converter, jpg to png, webp converter, free image tool">
<style>
body{margin:0;background:#0a0a0a;color:#fff;font-family:Arial, sans-serif;text-align:center}
.ad{background:#1a1a1a;padding:12px;font-size:11px;color:#888;border:1px dashed #333;margin:8px auto;max-width:700px}
.card{background:#181818;max-width:450px;margin:20px auto;padding:24px;border-radius:20px}
select,button
