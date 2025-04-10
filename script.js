// Time-based greeting
window.onload = function () {
  const greeting = document.getElementById('greeting');
  const hour = new Date().getHours();

  if (hour < 12) greeting.textContent = "Good Morning 👋";
  else if (hour < 18) greeting.textContent = "Good Afternoon ☀️";
  else greeting.textContent = "Good Evening 🌙";
};

// Contact button alert
document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("contactBtn");
  contactBtn.addEventListener("click", () => {
    alert("Opening Gmail to contact Sohail 🚀");
  });

  // Avatar animation
  const avatar = document.getElementById("avatar");
  avatar.addEventListener("mouseenter", () => {
    avatar.style.transform = "scale(1.1)";
    avatar.style.transition = "0.3s ease";
  });
  avatar.addEventListener("mouseleave", () => {
    avatar.style.transform = "scale(1)";
  });
});
