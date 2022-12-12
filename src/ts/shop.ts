import { categoryList } from "./models/categorylist";
import { Product } from "./models/Product";
import { headingList, productList } from "./models/productlist";

let menuContainer: HTMLDivElement = document.getElementById(
  "menu"
) as HTMLDivElement;
let productContainer: HTMLDivElement = document.getElementById(
  "products"
) as HTMLDivElement;

// Funktionen skriver ut menyn

function printMenu(): void {
  for (let i = 0; i < categoryList.length; i++) {
    let category: HTMLHeadingElement = document.createElement("h4");
    category.className = "main__menu__heading";

    category.innerHTML = categoryList[i].category;

    menuContainer.appendChild(category);

    category.addEventListener("click", () => {
      printProducts(categoryList[i].id);
      window.history.pushState(categoryList[i].category, "", categoryList[i].category)
    });
    for (let j = 0; j < categoryList[i].subCategories.length; j++) {
      let subCategories: HTMLHeadingElement = document.createElement("h5");

      subCategories.className = "main__menu__item";

      subCategories.innerHTML = categoryList[i].subCategories[j].category;

      menuContainer.appendChild(subCategories);

      subCategories.addEventListener("click", () => {
        printProducts(categoryList[i].subCategories[j].id);
        window.history.pushState(categoryList[i].subCategories[j].category, "", categoryList[i].subCategories[j].category);
      });
    }
  }
}

// Funktionen skriver ut produkter

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
    if (x === productList[i].category || x === productList[i].subCategory) {
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
      productImage.addEventListener("click", () => window.history.pushState(productList[i].name, "", productList[i].name));

      buyButton.addEventListener("click", () => {
        cart.push(productList[i]);
        printCart();
      });
    }
    
  }
}

export const cart: Product[] = [];
let shop: HTMLDivElement = document.getElementById("shop") as HTMLDivElement;
let itemContainer: HTMLDivElement = document.createElement("div");
let checkoutContainer: HTMLDivElement = document.createElement("div");
itemContainer.className = "header__shopcontainer";
checkoutContainer.className = "header__shop__checkoutcontainer";
shop.appendChild(itemContainer);
shop.appendChild(checkoutContainer);
let checkoutButton: HTMLButtonElement = document.createElement("button");
checkoutContainer.appendChild(checkoutButton);
checkoutButton.className = "header__shop__checkoutbutton";
let sum: number = 0;

checkoutButton.innerHTML = "Gå till kassan " + sum.toString() + " " + " kr";

// Funktionen skriver ut varukorgen

export function printCart(): void {
  itemContainer.innerHTML = "";
  checkoutButton.innerHTML = "";
  sum = 0;
  for (let i = 0; i < cart.length; i++) {
    let productCard: HTMLDivElement = document.createElement("div");
    let productImage: HTMLImageElement = document.createElement("img");
    let productName: HTMLHeadingElement = document.createElement("h5");
    let productPrice: HTMLHeadingElement = document.createElement("h6");
    let deleteButton: HTMLButtonElement = document.createElement("button");

    productCard.className = "header__shop__card";
    productImage.className = "header__shop__image";
    productName.className = "header__shop__name";
    productPrice.className = "header__shop__price";
    deleteButton.className = "header__shop__deletebutton";

    productImage.src = cart[i].img;
    productName.innerHTML = cart[i].name;
    productPrice.innerHTML = cart[i].price.toString() + "kr";
    deleteButton.innerHTML =
      "<i class='fa fa-trash-o' style='font-size:25px;color:red'></i>";
    checkoutButton.innerHTML += cart[i].price.toString();

    itemContainer.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(deleteButton);

    sum += cart[i].price;
    checkoutButton.innerHTML = "Gå till kassan " + sum.toString() + " " + " kr";

    deleteButton.addEventListener("click", () => {
      cart.splice(i, 1);
      printCart();
    });
  }
}

printMenu();

// Funktion för att visa produkten du klickar på för extra beskrivning och information
function productDisplay(id: number): void {
  productContainer.innerHTML = "";
  let productDisplay: HTMLDivElement = document.createElement("div");
  let productImage: HTMLImageElement = document.createElement("img");
  let productName: HTMLHeadingElement = document.createElement("h3");
  let productBrand: HTMLHeadingElement = document.createElement("h4");
  let productDescription: HTMLSpanElement = document.createElement("span");
  let productPrice: HTMLHeadingElement = document.createElement("h5");
  let buyButton: HTMLButtonElement = document.createElement("button");

  productDisplay.className = "productDisplay";
  productImage.className = "productDisplay__image";
  productName.className = "productDisplay__name";
  productBrand.className = "productDisplay__brand";
  productDescription.className = "productDisplay__description";
  productPrice.className = "productDisplay__price";
  buyButton.className = "productDisplay__button";

  productImage.src = productList[id].img;
  productName.innerHTML = productList[id].name;
  productBrand.innerHTML = productList[id].brandName;
  productDescription.innerHTML = productList[id].description;
  productPrice.innerHTML = productList[id].price.toString() + " kr";
  buyButton.innerHTML = "Lägg i Varukorg";

  productContainer.appendChild(productDisplay);
  productDisplay.appendChild(productImage);
  productDisplay.appendChild(productName);
  productDisplay.appendChild(productBrand);
  productDisplay.appendChild(productDescription);
  productDisplay.appendChild(productPrice);
  productDisplay.appendChild(buyButton);
}
