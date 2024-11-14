import "./reset.css";
import "./header.css"
import "./aboutStyles.css";
import { createElement } from "./helperFunction";

export function renderAbout() {
  const content = document.getElementById("content");

  const aboutHeading = createElement("h2");
  aboutHeading.textContent = "Our Story";

  const aboutText = createElement("p");
  aboutText.textContent =
    "At Dhaba, we believe in bringing the heart of India to your plate. Each dish is crafted with the warmth and vibrance of Indian hospitality, from treasured family recipes to the bold flavors of street food.";

  content.appendChild(aboutHeading);
  content.appendChild(aboutText);
}
