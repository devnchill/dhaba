import { createCustomElement } from "./helperFunction";
function renderMenu() {
  const CONTENT = document.querySelector("#content");
  const menuBox = createCustomElement("div", "#menubox");
  CONTENT.appendChild(menuBox);
}
