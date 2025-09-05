// assert { type: "json" } ya no va
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
import productsList from "./products.json" with { type: "json" };

function getProductSortedByPrice(list){ // Creamos una funcion que recibe una lista (el array de objetos)
  list.sort((a, b) => { // Sobre la lista, hacemos un sort que recibe 2 parametros
    if(a.price > b.price){ // Valida si el primer parametro, en su precio es mayor al segundo en su precio
      return 1; // Si eso es cierto, retorna 1
    }
    if(a.price < b.price){ // Valida si el primer parametro, en su precio es menor al segundo en su precio
      return -1 // Si es cierto, retorna -1
    }
    
    return 0; // Si los valores son iguales, retorna 0
  })
}

export function productsListComponent() {
  const section = document.createElement("section");
  section.style.border = "solid 1px #ccc";
  section.style.padding = "10px";

  const list = document.createElement("ul");

  getProductSortedByPrice(productsList); // Ejecutamos la funcion y le pasamos como parametro la lista de productos

  productsList.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.title} - $${product.price}`;
    list.appendChild(listItem);
  });

  section.appendChild(list);

  return section;
}
