import { headingList, productList } from "./models/productlist";
// let a = productList;
// let b = headingList;
let menuContainer: HTMLDivElement = document.getElementById(
  "menu"
) as HTMLDivElement;
let productContainer: HTMLDivElement = document.getElementById(
  "products"
) as HTMLDivElement;

let list: HTMLUListElement = document.getElementById(
  "list"
) as HTMLUListElement;
let list2: HTMLUListElement = document.getElementById(
  "list2"
) as HTMLUListElement;

let face: HTMLHeadingElement = document.getElementById(
  "face"
) as HTMLHeadingElement;

let body: HTMLHeadingElement = document.getElementById(
  "body"
) as HTMLHeadingElement;

let daycream: HTMLLIElement = document.getElementById(
  "daycream"
) as HTMLLIElement;

face.addEventListener("click", () => {
  list.classList.toggle("active");
});

body.addEventListener("click", () => {
  list2.classList.toggle("active");
});

daycream.addEventListener("click", () => {
  printProducts(1);
});

function printProducts(x: number): void {
  productContainer.innerHTML = "";
  let headingContainer: HTMLDivElement = document.createElement("div");

  for (let i = 0; i < headingList.length; i++)
    if (x === headingList[i].category) {
      let heading: HTMLHeadingElement = document.createElement("h2");
      let text: HTMLParagraphElement = document.createElement("p");

      headingContainer.className = "product__headingcontainer";

      heading.innerHTML = headingList[i].heading;
      text.innerHTML = headingList[i].text;

      productContainer.appendChild(headingContainer);
      headingContainer.appendChild(heading);
      headingContainer.appendChild(text);
    } else {
    }
  let productInnerContainer: HTMLDivElement = document.createElement("div");
  productInnerContainer.className = "product__innercontainer";
  productContainer.appendChild(productInnerContainer);

  for (let i = 0; i < productList.length; i++) {
    if (x === productList[i].category) {
      let productCard: HTMLDivElement = document.createElement("div");
      let productImage: HTMLImageElement = document.createElement("img");
      let productName: HTMLHeadingElement = document.createElement("h5");
      let productBrand: HTMLHeadingElement = document.createElement("h6");
      let productPrice: HTMLHeadingElement = document.createElement("h5");
      let buyButton: HTMLButtonElement = document.createElement("button");

      productCard.className = "card";
      productImage.className = "card__image";
      productName.className = "card__name";
      productBrand.className = "card__brand";
      productPrice.className = "card__price";
      buyButton.className = "card__button";

      productImage.src = productList[i].img;
      productName.innerHTML = productList[i].name;
      productBrand.innerHTML = productList[i].brandName;
      productPrice.innerHTML = productList[i].price.toString() + " kr";
      buyButton.innerHTML = "Lägg i Varukorg";

      productInnerContainer.appendChild(productCard);
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
      productCard.appendChild(productBrand);
      productCard.appendChild(productPrice);
      productCard.appendChild(buyButton);

      let id = productList[i].id - 1;
      productImage.addEventListener("click", () => productDisplay(id));
    }
  }
}

function productDisplay(id: number): void {
  productContainer.innerHTML = "";
  let productCard: HTMLDivElement = document.createElement("div");
  let productImage: HTMLImageElement = document.createElement("img");
  let productName: HTMLHeadingElement = document.createElement("h5");
  let productBrand: HTMLHeadingElement = document.createElement("h6");
  let productPrice: HTMLHeadingElement = document.createElement("h5");
  let buyButton: HTMLButtonElement = document.createElement("button");
  
  productCard.className = "card";
  productImage.className = "card__image";
  productName.className = "card__name";
  productBrand.className = "card__brand";
  productPrice.className = "card__price";
  buyButton.className = "card__button";

  productImage.src = productList[id].img;
  productName.innerHTML = productList[id].name;
  productBrand.innerHTML = productList[id].brandName;
  productPrice.innerHTML = productList[id].price.toString() + " kr";
  buyButton.innerHTML = "Lägg i Varukorg";

  productContainer.appendChild(productCard);
  productCard.appendChild(productImage);
  productCard.appendChild(productName);
  productCard.appendChild(productBrand);
  productCard.appendChild(productPrice);
  productCard.appendChild(buyButton);
    }
