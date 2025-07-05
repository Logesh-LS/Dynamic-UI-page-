AOS.init({
  duration: 1000,
  once: true
});

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");

 
  const btn = document.querySelector(".theme-toggle");
  btn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
}


window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    document.querySelector(".theme-toggle").textContent = "☀️";
  }
});
