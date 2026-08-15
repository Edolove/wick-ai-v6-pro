import { createAnalyzer } from "../core/engine.js";

const engine = createAnalyzer();

const startBtn = document.getElementById("start");
const status = document.getElementById("status");

startBtn.onclick = () => {
  status.textContent = "Connexion...";
  engine.start("BTCUSDT", "1m");
  status.textContent = "Observation";
};

setInterval(() => {
  const d = engine.getDecision();
  if (d) {
    status.textContent = `${d.dir} ${d.score}%`;
  }
}, 250);
