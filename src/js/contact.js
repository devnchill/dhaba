import "/src/css/reset.css";
import "/src/css/header.css";
import "/src/css/contact.css";
import { createCustomElement } from "./helperFunction";
export function renderContact() {
  const content = document.getElementById("content");

  const imgDiv = createCustomElement("div", "contact_img", "");
  const parentDiv = createCustomElement("div", "contact_parent", "");
  const div1 = createCustomElement(
    "div",
    "home_div1",
    "We'd love to hear from you! Visit us at Dhaba for an authentic Indian dining experience. Find us at:\n\n123 Spice Bazaar Road\nOld Delhi, India\n\nCall us at +91 98765 43210 for reservations or inquiries. Experience the flavors of India and the warmth of our hospitality!",
  );
  parentDiv.appendChild(div1);
  content.appendChild(imgDiv);
  content.appendChild(parentDiv);
}
