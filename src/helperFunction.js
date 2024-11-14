function createCustomElement(tag, id, textcontent) {
  let element = document.createElement(tag);
  element.id = id;
  element.textContent = textcontent;
  return element;
}

function changeBG() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("selected_button"));
      button.classList.add("selected_button");
    });
  });
}

export { changeBG, createCustomElement };
