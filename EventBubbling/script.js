// document.getElementById("parent").addEventListener("click" , () => {
//   console.log("parent Clicked")
// });

// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child clicked");
// });

document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Only child clicked");
});