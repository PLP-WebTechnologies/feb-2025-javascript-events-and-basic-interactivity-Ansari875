// Event Handling: Button Click
document.getElementById("myButton").addEventListener("click", function() {
  this.textContent = "Clicked!";
  this.style.backgroundColor = "green";
  this.classList.add("animate");  // Adds a bounce animation
});

// Event Handling: Hover effect
document.getElementById("hoverButton").addEventListener("mouseover", function() {
  this.style.backgroundColor = "lightgreen";
});

document.getElementById("hoverButton").addEventListener("mouseout", function() {
  this.style.backgroundColor = "";
});

// Keypress Detection
document.addEventListener("keydown", function(event) {
  console.log("Key pressed: " + event.key);
});

// Double-click event
document.getElementById("myButton").addEventListener("dblclick", function() {
  alert("Double-click detected!");
});

// Long press detection (1 second)
let pressTimer;
document.getElementById("myButton").addEventListener("mousedown", function() {
  pressTimer = setTimeout(() => {
    alert("Long press detected!");
  }, 1000);
});

document.getElementById("myButton").addEventListener("mouseup", function() {
  clearTimeout(pressTimer);
});

// Image Gallery (Next Image button)
let currentImage = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const imgElement = document.getElementById("galleryImage");

document.getElementById("nextButton").addEventListener("click", function() {
  currentImage = (currentImage + 1) % images.length;
  imgElement.src = images[currentImage];
});

// Accordion-style content
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Email validation
  if (!email.match(emailPattern)) {
    event.preventDefault();
    alert("Please enter a valid email.");
  }

  // Password validation
  if (password.length < 8) {
    event.preventDefault();
    alert("Password must be at least 8 characters long.");
  }
});

// Real-time password validation
document.getElementById("passwordInput").addEventListener("input", function() {
  const password = this.value;
  const feedback = document.getElementById("passwordFeedback");

  if (password.length < 8) {
    feedback.textContent = "Password too short.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Password looks good!";
    feedback.style.color = "green";
  }
});
