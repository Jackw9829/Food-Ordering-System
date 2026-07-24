/* ============================================================
   APU Food Ordering System — Shared JavaScript
   ============================================================ */

/* ── Language strings ── */
const i18n = {
  en: {
    appName: "APU Eats",
    login: "Login",
    student: "Student / Staff",
    vendor: "Food Vendor",
    admin: "Admin",
    welcome: "Welcome Back",
    welcomeSub: "Order your favourite meal from APU Cafeteria",
    email: "Email",
    password: "Password",
    searchPlaceholder: "Search stalls or food...",
    all: "All", meals: "Meals", beverages: "Beverages", snacks: "Snacks", desserts: "Desserts",
    home: "Home", orders: "Orders", notifs: "Alerts", profile: "Profile",
    addToCart: "Add to Cart", customise: "Customise",
    cartTitle: "My Cart", checkout: "Checkout",
    orderSummary: "Order Summary", placeOrder: "Place Order",
    payment: "Payment", payNow: "Pay Now",
    trackOrder: "Track Order",
    queueNum: "Your Queue Number",
    estTime: "Estimated Wait",
    confirmed: "Confirmed", preparing: "Preparing", ready: "Ready",
    sugarLevel: "Sugar Level", addOns: "Add-Ons", removeIngr: "Remove Ingredient",
    normal: "Normal", less: "Less Sweet", noSugar: "No Sugar",
    subtotal: "Subtotal", deliveryFee: "Service Fee", total: "Total",
    eWallet: "E-Wallet", creditCard: "Credit / Debit Card", cashOnCollect: "Cash on Collect",
    langChanged: "Language changed",
    itemAdded: "Added to cart!",
    orderPlaced: "Order placed successfully!",
    foodReady: "🔔 Your food is ready for collection!",
  },
  my: {
    appName: "APU Eats",
    login: "Log Masuk",
    student: "Pelajar / Kakitangan",
    vendor: "Penjual Makanan",
    admin: "Pentadbir",
    welcome: "Selamat Kembali",
    welcomeSub: "Pesan hidangan kegemaran anda dari Kantin APU",
    email: "E-mel",
    password: "Kata Laluan",
    searchPlaceholder: "Cari gerai atau makanan...",
    all: "Semua", meals: "Makanan", beverages: "Minuman", snacks: "Snek", desserts: "Pencuci Mulut",
    home: "Utama", orders: "Pesanan", notifs: "Makluman", profile: "Profil",
    addToCart: "Tambah ke Troli", customise: "Sesuaikan",
    cartTitle: "Troli Saya", checkout: "Daftar Keluar",
    orderSummary: "Ringkasan Pesanan", placeOrder: "Buat Pesanan",
    payment: "Pembayaran", payNow: "Bayar Sekarang",
    trackOrder: "Jejak Pesanan",
    queueNum: "Nombor Giliran Anda",
    estTime: "Masa Tunggu Anggaran",
    confirmed: "Disahkan", preparing: "Disediakan", ready: "Siap",
    sugarLevel: "Tahap Gula", addOns: "Tambahan", removeIngr: "Buang Bahan",
    normal: "Normal", less: "Kurang Manis", noSugar: "Tanpa Gula",
    subtotal: "Jumlah Kecil", deliveryFee: "Yuran Servis", total: "Jumlah",
    eWallet: "E-Dompet", creditCard: "Kad Kredit / Debit", cashOnCollect: "Tunai Semasa Ambil",
    langChanged: "Bahasa ditukar",
    itemAdded: "Ditambah ke troli!",
    orderPlaced: "Pesanan berjaya dibuat!",
    foodReady: "🔔 Makanan anda sedia untuk diambil!",
  },
  zh: {
    appName: "APU 美食",
    login: "登录",
    student: "学生 / 员工",
    vendor: "餐饮商家",
    admin: "管理员",
    welcome: "欢迎回来",
    welcomeSub: "从APU食堂订购您喜爱的餐点",
    email: "电子邮件",
    password: "密码",
    searchPlaceholder: "搜索摊位或食物...",
    all: "全部", meals: "正餐", beverages: "饮料", snacks: "零食", desserts: "甜点",
    home: "首页", orders: "订单", notifs: "通知", profile: "个人",
    addToCart: "加入购物车", customise: "自定义",
    cartTitle: "我的购物车", checkout: "结账",
    orderSummary: "订单摘要", placeOrder: "下单",
    payment: "付款", payNow: "立即支付",
    trackOrder: "追踪订单",
    queueNum: "您的排队号码",
    estTime: "预计等待时间",
    confirmed: "已确认", preparing: "准备中", ready: "已就绪",
    sugarLevel: "甜度", addOns: "加料", removeIngr: "去除配料",
    normal: "正常", less: "少甜", noSugar: "无糖",
    subtotal: "小计", deliveryFee: "服务费", total: "合计",
    eWallet: "电子钱包", creditCard: "信用卡 / 借记卡", cashOnCollect: "取餐时付现",
    langChanged: "语言已更改",
    itemAdded: "已加入购物车！",
    orderPlaced: "订单提交成功！",
    foodReady: "🔔 您的食物已准备好，请取餐！",
  }
};

/* ── Cart state ── */
const cart = JSON.parse(sessionStorage.getItem('apu_cart') || '[]');

function saveCart() {
  sessionStorage.setItem('apu_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? 'block' : 'none';
  }
}

function addToCart(item) {
  const existing = cart.find(c => c.id === item.id && c.custom === item.custom);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  saveCart();
  showToast(getLang().itemAdded, 'success');
}

/* ── Language ── */
let currentLang = localStorage.getItem('apu_lang') || 'en';

function getLang() { return i18n[currentLang]; }

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('apu_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyLang();
}

function applyLang() {
  const t = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' && el.placeholder) el.placeholder = t[key];
      else el.textContent = t[key];
    }
  });
}

/* ── Logout ── */
function logout() {
  sessionStorage.removeItem('apu_user');
  sessionStorage.removeItem('apu_cart');
  window.location.href = 'index.html';
}

/* ── Toast ── */
function showToast(msg, type = '') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity .4s'; }, 2500);
  setTimeout(() => toast.remove(), 3000);
}

/* ── Modal helpers ── */
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

/* ── Init on every page ── */
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
    if (btn.dataset.lang === currentLang) btn.classList.add('active');
  });
  applyLang();
  updateCartBadge();
});
