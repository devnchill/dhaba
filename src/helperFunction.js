function createCustomElement(tag, id, textcontent) {
  let element = document.createElement(tag);
  element.id = id;
  element.textContent = textcontent;
  return element;
}

function changeBG() {
  const target = document.getElementById("navbar");
  console.log(target);
  target.forEach((element) => {
    element.addEventListener("click", () => {
      target.addEventListener("click", (e) => {
        e.classlist.remove("selected_button");
      });
      element.classlist.add("selected_button");
    });
  });
}
export { changeBG,createCustomElement };
