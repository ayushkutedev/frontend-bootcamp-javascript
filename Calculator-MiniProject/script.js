const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const btn = document.getElementById("add");
const res = document.getElementById("result");

btn.addEventListener("click", function () {
  const a = n1.value.trim();
  const b = n2.value.trim();

  if (!a || !b) {
    alert("Please enter both numbers.");
    return;
  }

  const sum = Number(a) + Number(b);
  res.textContent = "Result: " + sum;
});