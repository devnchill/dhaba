import { createElement } from "./helperFunction";

export function renderHome() {
  const content = document.getElementById("content");
  const pInMain = createElement("p");
  const footer = createElement("footer");
  const pInFooter = createElement("p");

  pInMain.textContent =
    "Experience the warmth and richness of Indian tradition, where each dish tells a story of heritage, spices, and love. Welcome to Dhaba, where food is not just a meal—it's a celebration.";
  pInFooter.textContent =
    "Contact us at: +91 (870) 123-4567 | Address: 123 Roll House, FoodZilla";

  content.appendChild(pInMain);
  footer.appendChild(pInFooter);
  document.body.appendChild(footer);
}
