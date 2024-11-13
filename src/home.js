export const renderHome = (function () {
  return function () {
    function createElement(param) {
      return document.createElement(`${param}`);
    }
    const MAIN = document.querySelector("#container");
    let pInMain = createElement("p");
    let footer = createElement("footer");
    let pInFooter = createElement("p");

    pInMain.textContent =
      "Experience the warmth and richness of Indian tradition, where each dish tells a story of heritage, spices, and love. Welcome to Dhaba, where food is not just a meal—it's a celebration.";
    pInFooter.textContent =
      "Contact us at: +91 (870) 123-4567 | Address: 123 Roll House, FoodZilla";
    MAIN.appendChild(pInMain);
    footer.appendChild(pInFooter);
    document.querySelector("body").appendChild(footer);
  };
})();
