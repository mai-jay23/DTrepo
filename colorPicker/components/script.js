const color = document.querySelector("button");
const screenBackground = document.querySelector("body");
const image = document.getElementById("img");
const paragraph = document.querySelector("p");
color.addEventListener("click", () => {
  color.style.backgroundColor = "black";
  screenBackground.style.backgroundColor = "violet";
  image.src = "./images/stich.webp";
  image.alt = "stich!";

  paragraph.textContent = "This is stich!";
});
