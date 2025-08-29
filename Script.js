<script type="module">
  // Import Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // Cấu hình Firebase của bạn
  const firebaseConfig = {
    apiKey: "AIzaSyDcREGqdPpxcerQczyV9PRJIIp5G284sOk",
    authDomain: "shopchousikk.firebaseapp.com",
    projectId: "shopchousikk",
    storageBucket: "shopchousikk.firebasestorage.app",
    messagingSenderId: "213300117918",
    appId: "1:213300117918:web:a4d03384dfa615afc6168f",
    measurementId: "G-0JMS856ZZM"
  };

  // Khởi tạo Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Lấy phần tử HTML
  const emailInput = document.querySelector("input[type='text']");
  const passwordInput = document.querySelector("input[type='password']");
  const registerBtn = document.querySelector("button:nth-of-type(1)");
  const loginBtn = document.querySelector("button:nth-of-type(2)");

  // Xử lý đăng ký
  registerBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Đăng ký thành công!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert("Lỗi: " + error.message);
      });
  });

  // Xử lý đăng nhập
  loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Đăng nhập thành công!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert("Lỗi: " + error.message);
      });
  });
</script>
