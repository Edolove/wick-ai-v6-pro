import { createAnalyzer } from "../core/engine.js";

const app = document.getElementById("root");

app.innerHTML = `
<h1>Wick AI V6 Pro</h1>
<button id="start">Démarrer</button>
<div id="status">Arrêté</div>
`;

const engine = createAnalyzer();

document.getElementById("start").onclick = () => {
  engine.start("BTCUSDT","1m");
};
