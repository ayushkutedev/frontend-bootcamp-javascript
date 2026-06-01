const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); // stop page refresh

  // Get form data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate
  if (!name || !email || !message) {
    status.textContent = "All fields are required";
    return;
  }

  // Show loading
  status.textContent = "Sending...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit");
    }

    const result = await response.json();
    

    // Success
    status.textContent = "Message sent successfully!";
    form.reset();
  } catch (error) {
    // Error
    status.textContent = "Failed to send message. Try again.";
    console.error("Error:", error);
  }
});