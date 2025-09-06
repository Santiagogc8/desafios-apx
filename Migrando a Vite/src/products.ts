import productsList from "./products.json";
import { orderBy } from "lodash";

export function productsListComponent() {
  const section = document.createElement("section");
  section.style.border = "solid 1px #ccc";
  section.style.padding = "10px";

  const list = document.createElement("ul");
  const sortedByPrice = orderBy(productsList, ["price"], ["asc"]);

  sortedByPrice.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.title} - $${product.price}`;
    list.appendChild(listItem);
  });

  section.appendChild(list);

  return section;
}
