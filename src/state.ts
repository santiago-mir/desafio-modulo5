const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: {},
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  setMove(myPlay, computerPlay) {
    const currentState = this.getState();
    currentState.currentGame = { myPlay: myPlay, computerPlay: computerPlay };
    this.setState(currentState);
  },
  whoWins(userPlay, computerPlay) {
    if (userPlay == computerPlay) {
      return "empate";
    } else if (
      (userPlay == "tijera" && computerPlay == "papel") ||
      (userPlay == "piedra" && computerPlay == "tijera") ||
      (userPlay == "papel" && computerPlay == "piedra")
    ) {
      return true;
    } else if (
      (userPlay == "tijera" && computerPlay == "piedra") ||
      (userPlay == "piedra" && computerPlay == "papel") ||
      (userPlay == "papel" && computerPlay == "tijera")
    ) {
      return false;
    }
  },
  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  initHistory() {
    if (localStorage.getItem("history")) {
      true;
    } else {
      localStorage.setItem("history", JSON.stringify({ user: 0, computer: 0 }));
    }
  },
  getHistory() {
    const currentHistory = JSON.parse(localStorage.getItem("history")!);
    return currentHistory;
  },
  saveHistory(userHand, computerHand) {
    const currentHistory = this.getHistory();
    if (this.whoWins(userHand, computerHand) == true) {
      currentHistory.user = currentHistory.user + 1;
    } else if (this.whoWins(userHand, computerHand) == false) {
      currentHistory.computer = currentHistory.computer + 1;
    }
    localStorage.setItem("history", JSON.stringify(currentHistory)!);
  },
  clearHistory() {
    localStorage.setItem("history", JSON.stringify({ user: 0, computer: 0 }));
  },
};

export { state };
