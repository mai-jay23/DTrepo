const display = document.querySelector("#list");
const addBtn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clearBtn");
const input = document.querySelector("#inputText");

// Add item
addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const value = input.value.trim();

  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    display.appendChild(li);
    input.value = ""; // clear
  }
});

// Clear all items
clearBtn.addEventListener("click", () => {
  display.innerHTML = "";
});
