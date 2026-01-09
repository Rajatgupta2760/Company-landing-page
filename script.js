document.addEventListener("DOMContentLoaded", () => {


  const ctaBtn = document.querySelector(".btn-warning");
  const contactSection = document.querySelector(".contact");

  if (ctaBtn && contactSection) {
    ctaBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  const form = document.querySelector(".contact form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const phone = form.querySelector("input[type='tel']").value.trim();

    if (name === "" || email === "" || phone === "") {
      alert("Please fill all required fields!");
      return;
    }

    const successMsg = document.createElement("p");
    successMsg.textContent = "Thank you! We will contact you shortly.";
    successMsg.style.color = "green";
    successMsg.style.marginTop = "10px";

    form.appendChild(successMsg);
    form.reset();

    setTimeout(() => successMsg.remove(), 4000);
  });

  const cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-12px)";
      card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });

  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
  });

  setTimeout(() => {
    sections.forEach(section => {
      section.style.transition = "all 0.8s ease";
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    });
  }, 300);

})

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;


if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});