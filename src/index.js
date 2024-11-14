import "./styles.css";
import { renderHome } from "./home.js";
import { renderAbout } from "./about.js";

window.addEventListener("DOMContentLoaded", renderHome);

document
  .getElementById("homeBtn")
  .addEventListener("click", () => loadTab(renderHome));
document
  .getElementById("aboutBtn")
  .addEventListener("click", () => loadTab(renderAbout));

function loadTab(renderFunction) {
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderFunction();
}
