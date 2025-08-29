// Import the functions you need from the SDKs you // Import SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
  from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Thay config của bạn vào đây
const firebaseConfig = {
  apiKey: "AIzaSyDcREGqdPpxcerQczyV9PRJIIp5G284sOk",
  authDomain: "shopchousikk.firebaseapp.com",
  projectId: "shopchousikk",
  storageBucket: "shopchousikk.firebasestorage.app",
  messagingSenderId: "213300117918",
  appId: "1:213300117918:web:a4d03384dfa615afc6168f"
  measurementId: "G-0JMS856ZZM"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const accList = document.getElementById("acc-list");

// Đăng ký
signupBtn.onclick = () => {
  createUserWithEmailAndPassword(auth, emailEl.value, passwordEl.value)
    .then(() => alert("Đăng ký thành công"))
    .catch(err => alert(err.message));
};

// Đăng nhập
loginBtn.onclick = () => {
  signInWithEmailAndPassword(auth, emailEl.value, passwordEl.value)
    .then(() => {
      alert("Đăng nhập thành công");
      logoutBtn.style.display = "inline";
    })
    .catch(err => alert(err.message));
};

// Đăng xuất
logoutBtn.onclick = () => {
  signOut(auth).then(() => {
    alert("Đăng xuất");
    logoutBtn.style.display = "none";
  });
};

// Danh sách acc demo
const accs = [
  {id: 1, name: "Acc Free Fire VIP", price: "100k"},
  {id: 2, name: "Acc Liên Quân Rank Cao Thủ", price: "200k"},
  {id: 3, name: "Acc Roblox Rất Xịn", price: "150k"}
];

accs.forEach(acc => {
  const li = document.createElement("li");
  li.textContent = `${acc.name} - ${acc.price}`;
  accList.appendChild(li);
})
