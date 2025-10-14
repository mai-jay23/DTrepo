const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const student = Object.fromEntries(formData.entries());

  const students = JSON.parse(localStorage.getItem("students")) || [];

  // arr
  students.push(student);

  // storage
  localStorage.setItem("students", JSON.stringify(students));

  console.log(student);

  // data
  window.location.href = "db.html";
});
