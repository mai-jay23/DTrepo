const button = document.getElementById("btn");
const text = document.getElementById("text");
const count = document.getElementById("charCount");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const alphanumeric = text.value.replace(/[^a-zA-Z0-9]/g, "");
  count.textContent = alphanumeric.length;
});

text.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});
