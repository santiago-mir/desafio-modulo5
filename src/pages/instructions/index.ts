export function initInstructionsPage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
      <custom-text type="subtitle">Presioná jugar
      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>
      <custom-button class="button">Jugar</custom-button>
      <div class="hands-container">
      <custom-image class="imagen" type="tijera"></custom-image>
      <custom-image class="imagen" type="piedra"></custom-image>
      <custom-image class="imagen" type="papel"></custom-image>
      </div>
    `;
  div.classList.add("main-container");
  const button = div.querySelector(".button");
  button?.addEventListener("click", () => {
    params.goTo("/countdown");
  });

  return div;
}
