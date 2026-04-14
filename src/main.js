const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

// 🔥 MENÚ PRINCIPAL
if (btn && nav) {
  btn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
  const toggle = drop.querySelector('.dropdown-toggle');

  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation(); // 🔥 evita conflicto
      drop.classList.toggle('active');
    });
  }
});

// 🔥 BUSCADOR
const input = document.getElementById("search-input");
const results = document.getElementById("search-results");

if (input && results) {
  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();

    const pages = [
      { name: "Inicio", url: "index.html" },
      { name: "Nosotros", url: "nosotros.html" },
      { name: "Cursos", url: "cursos.html" },
      { name: "Cultura", url: "cultura.html" },
      { name: "Contactos", url: "contactos.html" }
    ];

    const filtered = pages.filter(p =>
      p.name.toLowerCase().includes(value)
    );

    results.innerHTML = filtered.map(p =>
      `<div onclick="window.location.href='${p.url}'">${p.name}</div>`
    ).join("");

    results.style.display = value ? "block" : "none";
  });
}