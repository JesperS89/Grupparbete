import { categoryList } from "./models/categorylist";
import { headingList, productList } from "./models/productlist";

let menuContainer: HTMLDivElement = document.getElementById(
  "menu"
) as HTMLDivElement;
let productContainer: HTMLDivElement = document.getElementById(
  "products"
) as HTMLDivElement;

function printMenu(): void {
  for (let i = 0; i < categoryList.length; i++) {
    let category: HTMLHeadingElement = document.createElement("h4");
    category.className = "main__menu__heading";

    category.innerHTML = categoryList[i].category;

    menuContainer.appendChild(category);

    category.addEventListener("click", () => {
      printProducts(categoryList[i].id);
    });
    for (let j = 0; j < categoryList[i].subCategories.length; j++) {
      console.log(categoryList[i].subCategories.length);

      let subCategories: HTMLHeadingElement = document.createElement("h5");

      subCategories.className = "main__menu__item";

      subCategories.innerHTML = categoryList[i].subCategories[j].category;

      menuContainer.appendChild(subCategories);

      subCategories.addEventListener("click", () => {
        printProducts(categoryList[i].subCategories[j].id);
      });
    }
  }
}

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
      let productPrice: HTMLHeadingElement = document.createElement("h6");
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
    }
  }
}
printMenu();
