"use strict";
import { renderHome } from "./home.js";
import { renderAbout } from "./about.js";
import { rendercontact } from "./contact.js";

function loadTab(renderFunction) {
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderFunction();
}
window.addEventListener("DOMContentLoaded", renderHome);

const HEADER = document.querySelector("header");

HEADER.addEventListener("click", (event) => {
  const id = event.target.id;
  switch (id) {
    case "homeBtn":
      loadTab(renderHome);
      break;
    case "aboutBtn":
      loadTab(renderAbout);
      break;
    case "contactBtn":
      loadTab(rendercontact);
      break;
    default:
      break;
  }
});
