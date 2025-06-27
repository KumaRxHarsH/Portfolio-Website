document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init();

  // Typing Effect
  const texts = ["Web Developer", "Web Designer","Graphic Designer", ];
  let index = 0, charIndex = 0;
  const typingSpan = document.querySelector(".typing");

  function typeEffect() {
    if (!typingSpan) return;
    if (charIndex < texts[index].length) {
      typingSpan.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 50);
    } else {
      setTimeout(eraseEffect, 1000);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typingSpan.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(typeEffect, 200);
    }
  }

  typeEffect();

  // Dark mode toggle
  const themeToggle = document.getElementById("toggle-theme");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Form submission (FormSubmit.co)
  const form = document.getElementById("contact-form");
  if (form) {
    form.setAttribute("action", "https://formsubmit.co/harshgupta2168@gmail.com");
    form.setAttribute("method", "POST");

    // Optionally add extra hidden input fields if needed
    const redirectInput = document.createElement("input");
    redirectInput.type = "hidden";
    redirectInput.name = "_next";
    redirectInput.value = window.location.href;
    form.appendChild(redirectInput);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");

  // Load saved preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Toggle on click
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });
});
