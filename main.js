let form = document.querySelector("form");
let input = document.querySelector("input");
let submit = document.querySelector("#btn");
let ul = document.querySelector("ul");
form.addEventListener("submit", saveTodo);

function saveTodo(e) {
  e.preventDefault();
  let li = document.createElement("li");
  let btn = document.createElement("button");
  li.innerText = input.value;
  btn.innerText = "x";
  ul.appendChild(li);
  li.appendChild(btn);

  li.className = "list-group-item d-flex  justify-content-between";
  btn.className = "btn btn-primary kanha";
  form.reset();
}
ul.addEventListener("click", delet);
function delet(e) {
  if (e.target.className.includes("kanha")) {
    let todo = e.target.parentElement;
    ul.removeChild(todo);
  }
}
