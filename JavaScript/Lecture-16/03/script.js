const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const boy = document.getElementById("boy");
  const girl = document.getElementById("girl");

  const n1 = boy.value.length;
  const n2 = girl.value.length;

  const result = Math.pow(n1 + n2, 3) % 101;
  document.querySelector("h2").textContent = `Result: ${result}%`;
  form.reset();
});
