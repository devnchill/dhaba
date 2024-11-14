import "./reset.css";
import "./header.css";
import "./homeStyles.css";
import { createElement } from "./helperFunction";

export function renderHome() {
  const content = document.getElementById("content");

  const div1 = createElement(
    "div",
    "div1",
    "Experience the warmth and richness of Indian tradition, where each dish tells a story of heritage, spices, and love. Welcome to Dhaba, where food is not just a meal—it's a celebration.",
  );
  const div2 = createElement(
    "div",
    "div2",
    "Contact us at: +91 (870) 123-4567 | Address: 123 Roll House, FoodZilla",
  );

  content.appendChild(div1);
  content.appendChild(div2);
}
