import { state } from "../../state";
export function initCountDown(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  style.innerHTML = `

   .countdown-container{
    min-width: 330px;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
   }

   .hands-container{
    height: 30vh;
   }

   .game-container{
    flex-direction: column;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

   .countdown{
    width: 350px;
    height: 350px;
    border-radius: 50%;
    border: solid 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

  .disabeld{
    pointer-events: none;
    opacity: 50%;
  }
  .target{
    opacity: 100%;
    position: relative;
    bottom: 50px;
  }
 

      
  `;

  let counter = 3;

  div.innerHTML = `
  <div class="countdown-container">
  <div class="countdown"><custom-text type="title">${counter}</custom-text></div>
  <div class="hands-container">
      <custom-image class="imagen" status="active" type="tijera"></custom-image>
      <custom-image class="imagen" status="active" type="piedra"></custom-image>
      <custom-image class="imagen" status="active" type="papel"></custom-image>
   </div>   
  </div>
  `;

  div.appendChild(style);

  const countdown = div.querySelector(".countdown");

  const intervalID = setInterval(() => {
    counter--;
    countdown!.innerHTML = `
        <custom-text type="title">${counter}</custom-text>
      `;
    if (counter <= 0) {
      clearInterval(intervalID);
      params.goTo("/welcome");
    }
  }, 1000);

  function updatePage(userHand, computerHand) {
    const intervalUpdate = setInterval(() => {
      div.innerHTML = `
        <div class="game-container">
        <custom-image class="imagen" variant="computer-hand" type=${computerHand.type}></custom-image>
        <custom-image class="imagen" variant="user-hand" type=${userHand.type}></custom-image>
        </div>
      `;

      div.appendChild(style);
      clearInterval(intervalUpdate);
    }, 1000);
  }

  const hands = div.querySelectorAll(".imagen");

  function getRandomHand() {
    let randomHand = hands![Math.floor(Math.random() * 3)];
    return randomHand;
  }
  for (const hand of hands!) {
    hand.addEventListener("click", (e) => {
      clearInterval(intervalID);
      const playerHand = e.target as any;
      const computerHand = getRandomHand() as any;
      state.setMove(playerHand.type, computerHand.type);
      state.saveHistory(playerHand.type, computerHand.type);
      updatePage(playerHand, computerHand);
      const changeRoute = setInterval(() => {
        params.goTo("/results");
        clearInterval(changeRoute);
      }, 2000);
      hands.forEach((element) => {
        element.classList.add("disabeld");
        playerHand.classList.add("target");
      });
    });
  }

  return div;
}
