const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    alert("All fields are required.");
    return;
  }

  if (pass.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert("Login successful!");
});