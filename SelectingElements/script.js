const title = document.getElementById("title");
const btn = document.getElementById("change");
const input = document.getElementById("username");

btn.addEventListener("click", () => {
    title.textContent = "Title Changed !";
    title.style.color = 'blue';
    title.style.fontSize = "40px";
    title.innerHTML = "<span style='color:red'>Updated!</span>";

});


input.addEventListener("input", () => {
  console.log("you typed :", input.value);

});


// btn.addEventListener("click", () => {
//   console.log("button Clicked !");

// })

