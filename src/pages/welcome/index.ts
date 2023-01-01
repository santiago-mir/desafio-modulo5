export function initWelcomePage(params) {
  const div = document.createElement("div");
  const url = require("url:../../imagen/papel.png");
  div.innerHTML = `
    <custom-text class="title">Piedra Papel o Tijera</custom-text>
    <custom-button class="button">Empezar</custom-button>
    <div class="hands-container">
    <img src=${url}/>
    <custom-image class="imagen" type="tijera"></custom-image>
    <custom-image class="imagen" type="piedra"></custom-image>
    <custom-image class="imagen" type="papel"></custom-image>
    </div>
  `;
  div.classList.add("main-container");
  const button = div.querySelector(".button");
  button?.addEventListener("click", () => {
    params.goTo("/instructions");
  });

  return div;
}
