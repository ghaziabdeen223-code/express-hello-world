const express = require('express');

const app = express();
const PORT = process.env.PORT || 10000;

const all = [
  { n: "بيتزا مارجريتا", d: "صوص طماطم، موزاريلا", p: 3500, c: "بيتزا", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" },
  { n: "بيتزا فراخ BBQ", d: "فراخ مدخنة، باربكيو", p: 4500, c: "بيتزا", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
  { n: "بيتزا لحم سودانية", d: "لحم ضأن، سماق", p: 5000, c: "بيتزا", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },

  { n: "شاورما لحم عربي كبير", d: "لحم + بطاطس + طحينة", p: 5000, c: "شاورما", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400" },
  { n: "شاورما فراخ عربي", d: "فراخ + تومية", p: 4500, c: "شاورما", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
  { n: "شاورما صاروخ ميكس", d: "نص لحم نص فراخ", p: 6000, c: "شاورما", img: "https://images.unsplash.com/photo-1558030006-450066393d65?w=400" },
  { n: "فتة شاورما لحم", d: "رز + شاورما + طحينة", p: 6500, c: "شاورما", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },

  { n: "فراخ بروست كامل", d: "فرخة كاملة + بطاطس", p: 8500, c: "فراخ", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },
  { n: "فراخ فحم نص", d: "نص فرخة فحم + سلطة", p: 6500, c: "فراخ", img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400" },
  { n: "شيش طاووق", d: "صدور فراخ متبلة", p: 5000, c: "فراخ", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400" },

  { n: "فول مصلح", d: "فول، جبنة، طعمية، بيض", p: 2500, c: "فول", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400" },
  { n: "طعمية 10 قطع", d: "طعمية سخنة مقرمشة", p: 1500, c: "فول", img: "https://images.unsplash.com/photo-1593001872095-7d5b3868dd20?w=400" },

  { n: "كباب ضأن", d: "سيخين كباب + طحينة", p: 6000, c: "لحوم", img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400" },
  { n: "شية جمر", d: "شية سودانية على الجمر", p: 7000, c: "لحوم", img: "https://images.unsplash.com/photo-1558030006-450066393d65?w=400" },

  { n: "أقاشي لحم", d: "أقاشي بالفول السوداني الحار", p: 5500, c: "أقاشي", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400" },
  { n: "أقاشي فراخ", d: "أقاشي فراخ متبل", p: 5000, c: "أقاشي", img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400" },
  { n: "صحن أقاشي مشكل", d: "لحم + فراخ + ضأن", p: 12000, c: "أقاشي", img: "https://images.unsplash.com/photo-1558030006-450066393d65?w=400" },

  { n: "فطيرة لحم", d: "لحم + خضار + جبنة", p: 2200, c: "فطاير", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400" },
  { n: "فطيرة جبنة", d: "موزاريلا + رومي", p: 1800, c: "فطاير", img: "https://images.unsplash.com/photo-1593560704563-f176a2eb61db?w=400" },
  { n: "فطيرة شاورما", d: "شاورما + بطاطس", p: 2800, c: "فطاير", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400" },
  { n: "فطيرة أقاشي", d: "أقاشي + بصل + شطة", p: 3000, c: "فطاير", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },

  { n: "سندوتش كبدة", d: "كبدة اسكندراني", p: 3000, c: "سندوتشات", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" },
  { n: "سندوتش بيرقر", d: "لحم + جبنة", p: 4000, c: "سندوتشات", img: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=400" },
  { n: "سندوتش طعمية", d: "3 طعمية + سلطة", p: 1500, c: "سندوتشات", img: "https://images.unsplash.com/photo-1593001872095-7d5b3868dd20?w=400" },

  { n: "فراخ كرسبي 4 قطع", d: "4 قطع + بطاطس + تومية", p: 5500, c: "كرسبي", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },
  { n: "كرسبي ستريبس 6", d: "6 شرائح + صوص جبنة", p: 4500, c: "كرسبي", img: "https://images.unsplash.com/photo-1630383249893-33d96bb7ae8c?w=400" },
  { n: "برجر كرسبي", d: "فراخ كرسبي + جبنة", p: 4200, c: "كرسبي", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400" },

  { n: "فتة لحمة", d: "رز + عيش + لحمة", p: 6000, c: "فتة", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
  { n: "فتة كوارع", d: "كوارع + رز + خل وتوم", p: 7500, c: "فتة", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400" },
  { n: "فتة فراخ", d: "فراخ + رز", p: 5500, c: "فتة", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400" },

  { n: "منقة فريش", d: "منقة طبيعية 100%", p: 1500, c: "عصاير", img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400" },
  { n: "جوافة باللبن", d: "جوافة + لبن", p: 1500, c: "عصاير", img: "https://images.unsplash.com/photo-1613478883965-46cc5ccbb7f3?w=400" },
  { n: "ليمون نعناع", d: "ليمون + نعناع", p: 1200, c: "عصاير", img: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=400" },
  { n: "كوكتيل غازي الخاص", d: "منقة + فراولة + موز + عسل", p: 2500, c: "عصاير", img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400" },
  { n: "عرديب", d: "عرديب سوداني مثلج", p: 1000, c: "عصاير", img: "https://images.unsplash.com/photo-1544148103-0772bf10d330?w=400" },
  { n: "كركديه", d: "كركديه بارد", p: 1000, c: "عصاير", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },

  { n: "كولا", d: "بيبسي / كوكا باردة", p: 800, c: "غازية", img: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400" },
  { n: "سفن أب", d: "سفن أب بارد", p: 800, c: "غازية", img: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400" },
  { n: "مياه معدنية", d: "مياه كبيرة", p: 500, c: "غازية", img: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=400" },
  { n: "شاي كرك", d: "شاي كرك أصلي", p: 800, c: "غازية", img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400" }
];

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ghazi Foode - المنيو الكامل</title>

<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@800;900&display=swap" rel="stylesheet">

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Tajawal',sans-serif
}

body{
  background:#080808;
  color:#fff;
  padding-bottom:75px
}

.h{
  background:#111;
  padding:12px 14px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom:3px solid #ff8c2f;
  position:sticky;
  top:0;
  z-index:20
}

.logo{
  color:#ff8c2f;
  font-size:22px;
  font-weight:900
}

.logo small{
  display:block;
  color:#fff;
  font-size:10px
}

.cart{
  background:#ff8c2f;
  color:#000;
  padding:8px 14px;
  border-radius:20px;
  font-weight:900;
  border:none
}

.hero{
  text-align:center;
  padding:18px;
  background:linear-gradient(135deg,#111,#2a1505)
}

.hero h1{
  color:#ff8c2f;
  font-size:22px
}

.hero p{
  color:#aaa;
  font-size:12px;
  margin-top:4px
}

.cats{
  display:flex;
  gap:6px;
  padding:10px;
  overflow:auto;
  background:#080808;
  position:sticky;
  top:58px;
  z-index:10
}

.cats div{
  background:#1b1b1b;
  border:1px solid #2a2a2a;
  padding:6px 12px;
  border-radius:18px;
  font-size:11px;
  cursor:pointer;
  white-space:nowrap
}

.cats .on{
  background:#ff8c2f;
  color:#000;
  font-weight:900
}

.grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:8px;
  padding:10px
}

.card{
  background:#161616;
  border-radius:12px;
  overflow:hidden;
  border:1px solid #222
}

.card img{
  width:100%;
  height:110px;
  object-fit:cover;
  display:block
}

.b{
  padding:7px
}

.t{
  font-weight:800;
  font-size:12px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis
}

.d{
  font-size:9px;
  color:#777;
  height:22px;
  overflow:hidden;
  margin:2px 0
}

.f{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:3px
}

.pr{
  color:#ff8c2f;
  font-weight:900;
  font-size:11px
}

.add{
  background:#ff8c2f;
  border:none;
  width:30px;
  height:30px;
  border-radius:50%;
  font-weight:900;
  font-size:16px;
  cursor:pointer
}

.add:active{
  transform:scale(.9)
}

.bottom{
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  background:#111;
  border-top:2px solid #ff8c2f;
  padding:10px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  z-index:30
}

#buy{
  background:#ff8c2f;
  color:#000;
  border:none;
  padding:9px 20px;
  border-radius:20px;
  font-weight:900;
  font-size:13px;
  cursor:pointer
}

@media(max-width:360px){
  .hero h1{
    font-size:18px
  }

  .card img{
    height:90px
  }

  #buy{
    padding:8px 14px
  }
}
</style>
</head>

<body>

<div class="h">
  <div class="logo">
    Ghazi Foode
    <small>🔥 كل شي - أم درمان</small>
  </div>

  <button class="cart">
    🛒 <span id="cc">0</span>
  </button>
</div>

<div class="hero">
  <h1>🍕 بيتزا • 🍗 فراخ • 🥤 عصاير • 🍖 لحوم • فطاير • أقاشي</h1>
  <p>أكبر منيو في الخرطوم - شاورما وكرسبي وفتة</p>
</div>

<div class="cats" id="cats"></div>

<div class="grid" id="grid"></div>

<div class="bottom">
  <div>
    <b id="cn">0 طلب</b>
    •
    <span id="tt" style="color:#ff8c2f;font-weight:900">0 SDG</span>
  </div>

  <button id="buy" onclick="order()">
    اطلب واتساب 🚀
  </button>
</div>

<script>
let cat = "الكل";
let cart = [];
let total = 0;

const cats = [
  "الكل",
  "بيتزا",
  "شاورما",
  "فراخ",
  "فول",
  "لحوم",
  "أقاشي",
  "فطاير",
  "سندوتشات",
  "كرسبي",
  "فتة",
  "عصاير",
  "غازية"
];

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderCats() {
  const container = document.getElementById("cats");

  container.innerHTML = cats.map(function(c) {
    return '<div class="' +
      (cat === c ? "on" : "") +
      '" data-category="' +
      escapeHtml(c) +
      '">' +
      escapeHtml(c) +
      '</div>';
  }).join("");

  container.querySelectorAll("[data-category]").forEach(function(button) {
    button.addEventListener("click", function() {
      setCat(this.dataset.category);
    });
  });
}

function setCat(c) {
  cat = c;
  renderCats();
  renderGrid();
}

function renderGrid() {
  const list = cat === "الكل"
    ? all
    : all.filter(function(x) {
        return x.c === cat;
      });

  let html = "";

  for (let i = 0; i < list.length; i++) {
    const it = list[i];

    html += `
      <div class="card">
        <img
          src="${it.img}"
          alt="${escapeHtml(it.n)}"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x250?text=Ghazi+Foode'"
        >

        <div class="b">
          <div class="t">${escapeHtml(it.n)}</div>

          <div class="d">
            ${escapeHtml(it.d)}
          </div>

          <div class="f">
            <div class="pr">
              ${it.p.toLocaleString()} SDG
            </div>

            <button
              class="add"
              data-name="${escapeHtml(it.n)}"
              data-price="${it.p}"
            >
              +
            </button>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById("grid").innerHTML = html;

  document.querySelectorAll(".add").forEach(function(button) {
    button.addEventListener("click", function() {
      const name = this.dataset.name;
      const price = Number(this.dataset.price);

      add(name, price);
    });
  });
}

function add(name, price) {
  cart.push({
    n: name,
    p: price
  });

  total += price;

  updateCart();
}

function updateCart() {
  document.getElementById("cc").innerText = cart.length;

  document.getElementById("cn").innerText =
    cart.length + (cart.length === 1 ? " طلب" : " طلبات");

  document.getElementById("tt").innerText =
    total.toLocaleString() + " SDG";
}

function order() {
  if (cart.length === 0) {
    alert("السلة فاضية! اختار حاجة 😋");
    return;
  }

  let message = "طلب جديد - Ghazi Foode\\n\\n";

  for (let i = 0; i < cart.length; i++) {
    message +=
      cart[i].n +
      " - " +
      cart[i].p.toLocaleString() +
      " SDG\\n";
  }

  message +=
    "\\nالمجموع: " +
    total.toLocaleString() +
    " SDG";

  /*
    ضع رقم واتساب الحقيقي هنا.
    الرقم لازم يكون بصيغة دولية بدون +
    مثال السودان:
    249XXXXXXXXX
  */

  const whatsappNumber = "249123456789";

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");

  alert(
    "تم تجهيز الطلب! 🔥\\n" +
    cart.length +
    " صنف - " +
    total.toLocaleString() +
    " SDG"
  );

  cart = [];
  total = 0;

  updateCart();
}

renderCats();
renderGrid();
</script>

</body>
</html>`);
});

app.listen(PORT, () => {
  console.log("Ghazi Foode Mega Menu Live on port " + PORT);
});
