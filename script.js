// Toggle dark mode
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Show alert on contact click
  const email = document.querySelector('#contact p:first-child');
  email.addEventListener('click', () => {
    alert('Feel free to reach out via email!');
  });
  
  // Typing animation
  const subtitle = document.querySelector('header p');
  const texts = ["Web Developer", "Student", "Tech Enthusiast"];
  let index = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < texts[index].length) {
      subtitle.textContent = texts[index].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        charIndex = 0;
        index = (index + 1) % texts.length;
        type();
      }, 1500);
    }
  }
  type();
  