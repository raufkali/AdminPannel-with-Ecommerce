var userLogin = true;
const cart = document.querySelector(".cart");
const loginBtn = document.querySelector(".nav-login-btn");

if (userLogin) {
  cart.style.display = "block";
  loginBtn.style.display = "none";
} else {
  cart.style.display = "none";
  loginBtn.style.display = "block";
}
