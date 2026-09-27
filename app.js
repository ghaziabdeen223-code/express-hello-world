const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.get('/', (req,res)=>{
res.send(`<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ghazi Foode</title><style>body{font-family:system-ui;background:#f8f8f8;margin:0;padding-bottom:90px}.h{background:#e63946;color:#fff;padding:18px;display:flex;justify-content:space-between;position:sticky;top:0}.c{display:flex;gap:8px;overflow:auto;padding:12px;background:#fff;position:sticky;top:56px}.b{padding:8px 16px;border-radius:20px;background:#eee;border:0;font-weight:bold}.b.on{background:#e63946;color:#fff}.g{display:grid;gap:10px;padding:12px}.k{background:#fff;border-radius:16px;padding:14px;display:flex;justify-content:space-between;box-shadow:0 2px 8px #0001}.pr{color:#e63946;font-weight:bold}.ad{background:#111;color:#fff;border:0;border-radius:10px;padding:10px 14px}.cart{position:fixed;bottom:0;left:0;right:0;background:#111;color:#fff;padding:14px;display:flex;justify-content:space-between;border-radius:20px 20px 0 0}.cart button{background:#25D366;border:0;padding:12px 22px;border-radius:30px;color:#fff;font-weight:bold}</style></head><body><div class="h"><h1>🍔 Ghazi Foode</h1><span>أم درمان</span></div><div class="c" id="cats"></div><div class="g" id="grid"></div><div class="cart"><div><span id="cnt">0</span> | <span id="tot">0</span> ج</div><button onclick="wa()">اطلب واتساب 📲</button></div><script>
const items=[{n:"بيتزا مارجريتا",d:"موزاريلا",p:6000,c:"بيتزا"},{n:"بيتزا BBQ فراخ",d:"مدخنة",p:7500,c:"بيتزا"},{n:"بيتزا لحم سودانية",d:"لحم ضأن",p:8000,c:"بيتزا"},{n:"شاورما لحم كبير",d:"طحينة",p:5500,c:"شاورما"},{n:"شاورما فراخ",d:"تومية",p:5000,c:"شاورما"},{n:"بروست كامل",d:"فرخة+بطاطس",p:12000,c:"فراخ"},{n:"شيش طاووق",d:"متبل",p:6500,c:"فراخ"},{n:"برجر Ghazi",d:"دبل لحم",p:6500,c:"برجر"}];
let cart=[],act="الكل";const cats=["الكل",...new Set(items.map(i=>i.c))];
function rc(){document.getElementById('cats').innerHTML=cats.map(x=>'<button class="b '+(x===act?'on':'')+'" onclick="sc(\\''+x+'\\')">'+x+'</button>').join('')}
function sc(x){act=x;rc();rg()}
function rg(){let l=act==="الكل"?items:items.filter(i=>i.c===act);document.getElementById('grid').innerHTML=l.map(t=>{let i=items.indexOf(t);return '<div class="k"><div><h3>'+t.n+'</h3><p>'+t.d+'</p><div class="pr">'+t.p+' ج</div></div><button class="ad" onclick="ad('+i+')">+ إضافة</button></div>'}).join('')}
function ad(i){let f=cart.find(v=>v.i===i);if(f)f.q++;else cart.push({i,q:1});up()}
function up(){let t=0,c=0;cart.forEach(v=>{t+=items[v.i].p*v.q;c+=v.q});document.getElementById('cnt').innerText=c;document.getElementById('tot').innerText=t}
function wa(){if(!cart.length){alert('السلة فاضية');return}let m="سلام Ghazi:%0A";cart.forEach(o=>{m+="- "+items[o.i].n+" x"+o.q+"%0A"});m+="%0Aالاجمالي: "+document.getElementById('tot').innerText+" ج";window.open("https://wa.me/249900000000?text="+m,"_blank")}
rc();rg();
</script></body></html>`);
});
app.listen(PORT,'0.0.0.0',()=>console.log('Live'));
