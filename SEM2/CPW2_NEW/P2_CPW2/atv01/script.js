function showSect() {
  event.preventDefault();

  let sects = document.getElementsByTagName('label');

  for (const e of sects) {
    e.classList.add("show");
    e.classList.remove("hidden");
  }
}

function mudarTema() {
  const body = document.body;
  const btn = document.getElementById("btnTema");
  const img = document.getElementById("btnImg");

  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    img.src = "./assets/sun.png";
    btn.style.backgroundColor = "#212121";
  } else {
    img.src = "./assets/moon.png";
    btn.style.backgroundColor = "#212121";
  }
}