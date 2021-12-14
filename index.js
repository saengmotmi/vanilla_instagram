import { joinComma } from "./utils/dom.js";

Array.prototype.joinComma = joinComma;

(function checkLogin() {
  const isLoginPage = location.pathname === "/login.html";
  const isMainPage = location.pathname === "/index.html";
  const isValidToken = localStorage.getItem("token");

  // 로그인 하지 않았는데 메인 페이지로 갈 경우 -> 로그인 페이지로 리다이렉트
  if (!isLoginPage && !isValidToken) {
    alert("우선 로그인 해주세요");
    location.href = "login.html";
  }

  // 로그인 했는데 로그인 페이지로 갈 경우 -> 메인 페이지로 리다이렉트
  if (!isMainPage && isValidToken) {
    location.href = "index.html";
  }
})();
