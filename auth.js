// auth.js
import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const userActions = document.getElementById("user-actions");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    try {
      // lấy username từ Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const username = userDoc.exists() ? userDoc.data().username : "Người dùng";

      userActions.innerHTML = `
        <span>Xin chào, <b>${username}</b></span>
        <button id="logoutBtn">Đăng xuất</button>
      `;

      document.getElementById("logoutBtn").onclick = async () => {
        await signOut(auth);
        location.reload();
      };
    } catch (err) {
      console.error("Lỗi khi lấy username:", err);
    }
  } else {
    loginBtn.onclick = () => location.href = "login.html";
    registerBtn.onclick = () => location.href = "register.html";
  }
});
