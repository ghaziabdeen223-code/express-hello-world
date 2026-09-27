const express = require("express");

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl" translate="no">
<head>
<meta charset="UTF-8">
<meta name="google" content="notranslate">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Ghazi Food</title>

<style>
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

body{
  font-family:Arial,Tahoma,sans-serif;
  background:#f7f3ed;
  color:#222;
}

button{
  font-family:inherit;
  cursor:pointer;
}

.header{
  background:#171717;
  color:white;
  padding:18px 5%;
  position:sticky;
  top:0;
  z-index:100;
  box-shadow:0 3px 15px #0003;
}

.header-content{
  max-width:1200px;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
}

.logo{
  font-size:25px;
  font-weight:bold;
  color:#e8a83e;
}

.logo span{
  color:white;
}

.header-buttons{
  display:flex;
  gap:10px;
}

.icon-btn{
  background:#292929;
  color:white;
  border:1px solid #444;
  border-radius:12px;
  padding:10px 14px;
  font-size:18px;
}

.hero{
  max-width:1200px;
  margin:25px auto;
  padding:45px 25px;
  border-radius:25px;
  background:
    linear-gradient(90deg,#111e,#1117),
    linear-gradient(135deg,#8b5427,#e6a53c);
  color:white;
  text-align:center;
}

.hero h1{
  font-size:42px;
  margin-bottom:12px;
}

.hero p{
  font-size:18px;
  color:#eee;
  margin-bottom:22px;
}

.hero-btn{
  border:0;
  background:#e8a83e;
  color:#151515;
  padding:13px 25px;
  border-radius:12px;
  font-weight:bold;
  font-size:16px;
}

.container{
  max-width:1200px;
  margin:auto;
  padding:0 18px 40px;
}

.search{
  width:100%;
  padding:16px 20px;
  border:1px solid #ddd;
  border-radius:15px;
  font-size:16px;
  outline:none;
  margin-bottom:18px;
  background:white;
}

.search:focus{
  border-color:#d49432;
}

.categories{
  display:flex;
  gap:10px;
  overflow-x:auto;
  padding:5px 0 18px;
}

.categories::-webkit-scrollbar{
  height:4px;
}

.category{
  white-space:nowrap;
  border:0;
  background:white;
  padding:11px 17px;
  border-radius:20px;
  box-shadow:0 2px 8px #0001;
}

.category.active,
.category:hover{
  background:#e3a03a;
  color:white;
}

.section-title{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:18px 0;
}

.section-title h2{
  font-size:25px;
}

.food-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:18px;
}

.food-card{
  background:white;
  border-radius:18px;
  overflow:hidden;
  box-shadow:0 4px 15px #0001;
  transition:.2s;
}

.food-card:hover{
  transform:translateY(-3px);
  box-shadow:0 7px 20px #0002;
}

.food-image{
  height:170px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#eee2cf;
  font-size:75px;
}

.food-info{
  padding:15px;
}

.food-name{
  font-size:18px;
  font-weight:bold;
  margin-bottom:7px;
}

.food-description{
  color:#777;
  font-size:13px;
  min-height:34px;
  margin-bottom:12px;
}

.food-bottom{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
}

.price{
  font-size:17px;
  font-weight:bold;
  color:#b46d10;
}

.add-btn{
  border:0;
  background:#191919;
  color:white;
  border-radius:10px;
  padding:9px 13px;
}

.add-btn:hover{
  background:#d8952f;
}

.cart-panel{
  position:fixed;
  left:0;
  right:0;
  bottom:-100%;
  background:white;
  z-index:200;
  border-radius:25px 25px 0 0;
  box-shadow:0 -5px 30px #0003;
  max-height:85vh;
  overflow:auto;
  transition:.3s;
  padding:20px;
}

.cart-panel.open{
  bottom:0;
}

.cart-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:15px;
}

.close-cart{
  border:0;
  background:#eee;
  border-radius:10px;
  padding:9px 13px;
}

.cart-item{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:12px 0;
  border-bottom:1px solid #eee;
  gap:10px;
}

.quantity{
  display:flex;
  align-items:center;
  gap:8px;
}

.quantity button{
  width:30px;
  height:30px;
  border:0;
  border-radius:8px;
  background:#eee;
}

.cart-total{
  display:flex;
  justify-content:space-between;
  font-size:20px;
  font-weight:bold;
  margin:20px 0;
}

.order-btn{
  width:100%;
  border:0;
  background:#e09b35;
  color:#111;
  padding:15px;
  border-radius:13px;
  font-size:17px;
  font-weight:bold;
}

.empty{
  text-align:center;
  padding:30px;
  color:#777;
}

.footer{
  background:#171717;
  color:#bbb;
  text-align:center;
  padding:30px 15px;
  margin-top:30px;
}

.cart-floating{
  position:fixed;
  left:20px;
  bottom:20px;
  z-index:150;
  background:#e09b35;
  color:#111;
  border:0;
  border-radius:50px;
  padding:14px 20px;
  font-weight:bold;
  box-shadow:0 5px 20px #0003;
}

@media(max-width:950px){
  .food-grid{
    grid-template-columns:repeat(3,1fr);
  }
}

@media(max-width:700px){
  .hero{
    margin:15px 10px;
    padding:35px 15px;
  }

  .hero h1{
    font-size:30px;
  }

  .food-grid{
    grid-template-columns:repeat(2,1fr);
    gap:12px;
  }

  .food-image{
    height:125px;
    font-size:55px;
  }

  .food-info{
    padding:11px;
  }

  .food-name{
    font-size:16px;
  }

  .food-description{
    font-size:12px;
  }

  .food-bottom{
    flex-direction:column;
    align-items:stretch;
  }

  .add-btn{
    width:100%;
  }
}

@media(max-width:400px){
  .food-grid{
    grid-template-columns:1fr 1fr;
  }

  .logo{
    font-size:20px;
  }
}
</style>
</head>

<body>

<header class="header">
  <div class="header-content">
    <div class="logo">🍽️ Ghazi <span>Food</span></div>

    <div class="header-buttons">
      <button class="icon-btn" onclick="goBack()">←</button>
      <button class="icon-btn" onclick="openCart()">🛒 <span id="cartCount">0</span></button>
    </div>
  </div>
</header>

<section class="hero">
  <h1>مرحباً بك في Ghazi Food</h1>
  <p>أشهى الوجبات والمشروبات في مكان واحد</p>
  <button class="hero-btn" onclick="document.getElementById('menu').scrollIntoView({behavior:'smooth'})">
    تصفح المنيو
  </button>
</section>

<main class="container" id="menu">

  <input
    class="search"
    id="search"
    type="search"
    placeholder="🔍 ابحث عن وجبة أو مشروب..."
    oninput="searchFood()"
  >

  <div class="categories">
    <button class="category active" onclick="filterFood('all',this)">الكل</button>
    <button class="category" onclick="filterFood('meat',this)">🥩 اللحوم</button>
    <button class="category" onclick="filterFood('chicken',this)">🍗 الدجاج</button>
    <button class="category" onclick="filterFood('pizza',this)">🍕 البيتزا</button>
    <button class="category" onclick="filterFood('sandwich',this)">🥪 السندوتشات</button>
    <button class="category" onclick="filterFood('burger',this)">🍔 البرجر</button>
    <button class="category" onclick="filterFood('rice',this)">🍚 الأرز</button>
    <button class="category" onclick="filterFood('salad',this)">🥗 السلطات</button>
    <button class="category" onclick="filterFood('drinks',this)">🧃 العصائر</button>
    <button class="category" onclick="filterFood('dessert',this)">🍰 الحلويات</button>
  </div>

  <div class="section-title">
    <h2>🍴 قائمة الطعام</h2>
  </div>

  <div class="food-grid" id="foodGrid"></div>

</main>

<button class="cart-floating" onclick="openCart()">
  🛒 السلة (<span id="floatingCount">0</span>)
</button>

<div class="cart-panel" id="cartPanel">

  <div class="cart-header">
    <h2>🛒 طلبك</h2>
    <button class="close-cart" onclick="closeCart()">إغلاق ✕</button>
  </div>

  <div id="cartItems"></div>

  <div class="cart-total">
    <span>الإجمالي</span>
    <span id="cartTotal">0 SDG</span>
  </div>

  <button class="order-btn" onclick="sendOrder()">
    تأكيد الطلب
  </button>

</div>

<footer class="footer">
  <h3>Ghazi Food</h3>
  <p>أشهى الوجبات والمشروبات 🍽️</p>
  <p>© 2026 Ghazi Food</p>
</footer>

<script>

const foods = [

  {
    id:1,
    name:"ستيك لحم مشوي",
    category:"meat",
    price:8500,
    emoji:"🥩",
    description:"لحم مشوي مع صوص خاص"
  },

  {
    id:2,
    name:"كباب لحم",
    category:"meat",
    price:7000,
    emoji:"🍢",
    description:"كباب لحم طازج ومشوي"
  },

  {
    id:3,
    name:"لحم بالصلصة",
    category:"meat",
    price:7500,
    emoji:"🥘",
    description:"قطع لحم مع صوص غني"
  },

  {
    id:4,
    name:"دجاج مشوي",
    category:"chicken",
    price:6500,
    emoji:"🍗",
    description:"دجاج مشوي بتتبيلة خاصة"
  },

  {
    id:5,
    name:"دجاج مقرمش",
    category:"chicken",
    price:6000,
    emoji:"🍗",
    description:"قطع دجاج مقرمشة"
  },

  {
    id:6,
    name:"دجاج بالكاري",
    category:"chicken",
    price:7000,
    emoji:"🍛",
    description:"دجاج بصوص الكاري"
  },

  {
    id:7,
    name:"بيتزا لحم",
    category:"pizza",
    price:9000,
    emoji:"🍕",
    description:"جبنة ولحم وخضروات"
  },

  {
    id:8,
    name:"بيتزا دجاج",
    category:"pizza",
    price:8500,
    emoji:"🍕",
    description:"دجاج وجبنة وصوص خاص"
  },

  {
    id:9,
    name:"بيتزا خضار",
    category:"pizza",
    price:7000,
    emoji:"🍕",
    description:"خضروات طازجة وجبنة"
  },

  {
    id:10,
    name:"برجر لحم",
    category:"burger",
    price
