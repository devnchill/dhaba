import "/src/css/reset.css";
import "/src/css/header.css";
import "/src/css/menu.css";
import { createCustomElement } from "./helperFunction";

function renderMenu() {
  const CONTENT = document.querySelector("#content");
  const menuImg = createCustomElement("div", "menu_img");
  const menuBox = createCustomElement("div", "menu_box");

  function createTable() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const thName = document.createElement("th");
    thName.textContent = "Dish Name";
    const thPrice = document.createElement("th");
    thPrice.textContent = "Price (INR)";
    headerRow.appendChild(thName);
    headerRow.appendChild(thPrice);
    thead.appendChild(headerRow);

    const products = [
      { name: "Paneer Butter Masala", price: "250 INR" },
      { name: "Butter Chicken", price: "300 INR" },
      { name: "Biryani", price: "200 INR" },
      { name: "Chole Bhature", price: "150 INR" },
      { name: "Dosa", price: "120 INR" },
      { name: "Samosa", price: "10 INR" },
      { name: "Pav Bhaji", price: "100 INR" },
      { name: "Pani Puri", price: "20 INR" },
      { name: "Aloo Gobi", price: "180 INR" },
      { name: "Malai Kofta", price: "220 INR" },
      { name: "Tandoori Chicken", price: "350 INR" },
    ];

    products.forEach((product) => {
      const row = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.textContent = product.name;
      const tdPrice = document.createElement("td");
      tdPrice.textContent = product.price;
      row.appendChild(tdName);
      row.appendChild(tdPrice);
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    menuBox.appendChild(table);
  }
  createTable();
  CONTENT.appendChild(menuImg);
  CONTENT.appendChild(menuBox);
}

export { renderMenu };
