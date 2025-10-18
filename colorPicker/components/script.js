const color = document.querySelector("button");
const screenBackground = document.querySelector("body");
color.addEventListener("click", () => {
  color.style.backgroundColor = "black";
  screenBackground.style.backgroundColor = "violet";
});
