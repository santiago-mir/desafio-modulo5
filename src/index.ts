import "./components/button";
import "./components/text";
import "./components/hands";

import { initRouter } from "./router";
import { state } from "./state";

function main() {
  const container = document.querySelector(".root");
  state.initHistory();
  initRouter(container!);
}

main();
