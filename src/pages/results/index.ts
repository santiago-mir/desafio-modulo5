import { state } from "../../state";

export function initResults(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  const winURL = require("url:../../imagen/ganaste.png");
  const lossURL = require("url:../../imagen/perdiste.png");
  const tieURL = require("url:../../imagen/empate.png");

  function processResults() {
    const currentGame = state.getState().currentGame;
    const result = state.whoWins(currentGame.myPlay, currentGame.computerPlay);
    let background;
    let imgURL;
    if (result == true) {
      background = "rgb(95 203 99 / 90%);";
      imgURL = winURL;
      console.log(imgURL);

      return { imgURL, background };
    } else if (result == false) {
      background = "rgba(137, 73, 73, 0.9);";
      imgURL = lossURL;
      console.log(imgURL);
      return { imgURL, background };
    } else background = "rgb(254 211 92 / 90%);";
    imgURL = tieURL;
    console.log(imgURL);
    return { imgURL, background };
  }

  function renderPage() {
    const userScore = state.getHistory().user;
    const computerScore = state.getHistory().computer;
    div.innerHTML = `

    <div class="results-container">
    <div class="img-container">
      <img src="${processResults().imgURL}"/>
      </div>
     <div class="score-container">
     <custom-text tag="h1" type="paragraph">Score</custom-text>
     <div>
     <custom-text class="user-score" tag="p" type="paragraph">Vos:${userScore}</custom-text>
     <custom-text class="computer-score" tag="p" type="paragraph">Maquina:${computerScore}</custom-text>
     </div>
     </div>
     <custom-button class="play-again-button">Volver a Jugar</custom-button>
     <custom-button class="reset-history-button">Limpiar Historial</custom-button>
     </div>  
 `;
    style.innerHTML = `
  .results-container{
    height: 100vh;
    background: ${processResults().background}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .img-container{
    width: 250px;
    height: 250px;
  }
  .score-container{
    width: 260px;
    height: 200px;
    border: 10px solid;
    border-radius: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
 `;
    div.appendChild(style);
    const playAgainButton = div.querySelector(".play-again-button");
    playAgainButton?.addEventListener("click", () => {
      params.goTo("/welcome");
    });
    const resetHistoryButton = div.querySelector(".reset-history-button");
    resetHistoryButton?.addEventListener("click", () => {
      state.clearHistory();
      renderPage();
    });
  }

  renderPage();

  return div;
}
