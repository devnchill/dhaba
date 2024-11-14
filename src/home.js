import "./reset.css";
import "./header.css";
import "./home.css";
import { createCustomElement } from "./helperFunction";
export function renderHome() {
  const content = document.getElementById("content");

  const imgDiv = createCustomElement("div", "home_img", "");
  const parentDiv = createCustomElement("div", "home_parent", "");
  const div1 = createCustomElement(
    "div",
    "home_div1",
    "Experience the warmth and richness of Indian tradition, where each dish tells a story of heritage, spices, and love. Welcome to Dhaba, where food is not just a meal—it's a celebration.",
  );
  parentDiv.appendChild(div1);
  content.appendChild(imgDiv);
  content.appendChild(parentDiv);
}
