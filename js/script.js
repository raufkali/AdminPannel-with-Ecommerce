document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "`") {
    // CTRL + A opens the admin panel
    window.location.href = "/admin/login.html";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 300); // delay in milliseconds (e.g., 300ms)
});
