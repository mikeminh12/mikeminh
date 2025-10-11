// auth.js
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const userActions = document.getElementById("user-actions");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userActions.innerHTML = `
      <span>Xin chào, <b>${user.email}</b></span>
      <button id="logoutBtn">Đăng xuất</button>
    `;
    document.getElementById("logoutBtn").onclick = async () => {
      await signOut(auth);
      location.reload();
    };
  } else {
    loginBtn.onclick = () => location.href = "login.html";
    registerBtn.onclick = () => location.href = "register.html";
  }
});
