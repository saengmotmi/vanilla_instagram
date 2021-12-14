import { $ } from "../utils/dom.js";
import { sideEffect, setEventListener } from "../utils/sideEffect.js";
import fetcher from "../utils/fetcher.js";

const cssLogin = await import("./login.css", { assert: { type: "css" } });
document.adoptedStyleSheets = [
  ...document.adoptedStyleSheets,
  cssLogin.default,
];

const api = {
  login: "https://westagram-signup.herokuapp.com/login",
  signup: "https://westagram-signup.herokuapp.com/signup",
};

(async function Login() {
  const login = $(".login");

  login.innerHTML = `
    <form class="login_form">
      <img class="instagram_logo" alt="instagram_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
      <input type="text" name="username" placeholder="전화번호, 사용자 이름 또는 이메일"  autocomplete="username" />
      <input type="password" name="password" placeholder="비밀번호" autocomplete="current-password" />
      <button name="login" type="button" class="bold">로그인</button>
      <button name="signUp" type="button" class="bold">회원가입</button>
    </form>
  `;

  sideEffect(() => {
    const form = login.querySelector(".login_form");
    const loginButton = login.querySelector("button[name='login']");
    const signUpButton = login.querySelector("button[name='signUp']");
    const [usernameInput, passwordInput] = login.querySelectorAll("input");

    setEventListener({
      element: form,
      eventType: "keypress",
      callback: handleLogin,
    });

    setEventListener({
      element: loginButton,
      eventType: "click",
      callback: handleLogin,
    });

    setEventListener({
      element: signUpButton,
      eventType: "click",
      callback: handleSignUp,
    });

    function goToMain() {
      location.href = "index.html";
    }

    async function handleSignUp() {
      const { token } = await fetcher(api.signup, {
        id: usernameInput.value,
        password: passwordInput.value,
      });

      if (token) {
        localStorage.setItem("token", token);
        alert("회원가입 성공!");

        goToMain();
      }
    }

    async function handleLogin(e) {
      const isFromInput = ["username", "password"].some(
        (name) => name === e.srcElement.name
      );
      if (isFromInput && e.key !== "Enter") return;

      const { token } = await fetcher(api.login, {
        id: usernameInput.value,
        password: passwordInput.value,
      });

      if (token) {
        localStorage.setItem("token", token);
        alert("로그인 성공!");

        goToMain();
      }
    }
  });
})();
