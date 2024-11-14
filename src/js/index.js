"use strict";
import { renderHome } from "./home.js";
import { rendercontact } from "./contact.js";
import { changeBG } from "./helperFunction.js";

function loadTab(renderFunction) {
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderFunction();
  changeBG();
}
window.addEventListener("DOMContentLoaded", loadTab(renderHome));

const HEADER = document.querySelector("header");

HEADER.addEventListener("click", (event) => {
  const id = event.target.id;
  switch (id) {
    case "homeBtn":
      loadTab(renderHome);
      break;
    //case "aboutBtn":
    //  loadTab(renderAbout);
    //  break;
    case "contactBtn":
      loadTab(rendercontact);
      break;
    default:
      break;
  }
});
