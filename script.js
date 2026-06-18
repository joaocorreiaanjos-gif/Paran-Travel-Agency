// modo escuro
document.getElementById("darkModeBtn").onclick = () => {
  document.body.classList.toggle("dark");
};

// formulário
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Solicitação enviada! Entraremos em contato.");
});
// modo escuro
document.getElementById("darkModeBtn").onclick = () => {
  document.body.classList.toggle("dark");
};

// formulário
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Solicitação enviada! Entraremos em contato.");
});


// 🖼️ MODAL DE IMAGENS
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

// pega TODAS as imagens dos cards
document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// fechar clicando fora da imagem
modal.addEventListener("click", () => {
  modal.style.display = "none";
});
// ===== DEPOIMENTOS CLICÁVEIS =====
const testimonialModal = document.getElementById("testimonialModal");
const testimonialText = document.getElementById("testimonialText");

document.querySelectorAll(".testimonial.clickable").forEach(item => {
  item.addEventListener("click", () => {
    testimonialText.innerText = item.dataset.text;
    testimonialModal.style.display = "flex";
  });
});

// fechar clicando fora
testimonialModal.addEventListener("click", () => {
  testimonialModal.style.display = "none";
});
// ===== DEPOIMENTOS PREMIUM CARROSSEL =====

const depoimentos = [
  {
    text: "A experiência foi incrível! Tudo muito organizado e seguro. Recomendo demais a agência.",
    name: "— Ana Paula, Curitiba",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    text: "O city tour em Curitiba foi perfeito. Guia muito atencioso e roteiro completo.",
    name: "— Carlos Henrique, São Paulo",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    text: "A Ilha do Mel é maravilhosa! Tudo organizado do início ao fim.",
    name: "— Mariana Souza, Londrina",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    text: "Melhor agência de turismo que já usei. Atendimento excelente!",
    name: "— João Victor, Florianópolis",
    stars: "⭐⭐⭐⭐⭐"
  }
];

let index = 0;

function trocarDepoimento() {
  const dep = depoimentos[index];

  const textEl = document.getElementById("depText");
  const nameEl = document.getElementById("depName");
  const container = document.querySelector(".testimonial");

  container.classList.remove("fade-in");

  setTimeout(() => {
    textEl.innerText = `"${dep.text}"`;
    nameEl.innerText = dep.name;
    container.querySelector(".stars").innerText = dep.stars;

    container.classList.add("fade-in");
  }, 200);

  index = (index + 1) % depoimentos.length;
}

setInterval(trocarDepoimento, 4000);
// animação leve ao carregar página
window.addEventListener("load", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "1s";
    document.body.style.opacity = 1;
  }, 100);
});
