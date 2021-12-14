import { joinComma } from "./utils/dom.js";

Array.prototype.joinComma = joinComma;

(function checkLogin() {
  const isLoginPage = location.pathname === "/login.html";
  const isValidToken = localStorage.getItem("token");

  if (!isLoginPage && !isValidToken) {
    alert("우선 로그인 해주세요");
    location.href = "login.html";
  }
})();
