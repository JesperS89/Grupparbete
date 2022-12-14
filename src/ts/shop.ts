import { categoryList } from "./models/categorylist";
import { Product } from "./models/Product";
import { headingList, productList } from "./models/productlist";
import { CartItem } from "./models/cartItem";

let menuContainer: HTMLDivElement = document.getElementById(
  "menu"
) as HTMLDivElement;
let productContainer: HTMLDivElement = document.getElementById(
  "products"
) as HTMLDivElement;

// Funktionen skriver ut menyn

function printMenu(): void {
  for (let i = 0; i < categoryList.length; i++) {
    let category: HTMLAnchorElement = document.createElement("a");
    category.className = "main__menu__heading";
    category.href = "/shop.html?category=" + categoryList[i].id;

    category.innerHTML = categoryList[i].category;

    menuContainer.appendChild(category);

    category.addEventListener("click", () => {
      printProducts();
      // window.history.pushState(categoryList[i].id, "", categoryList[i].id.toString())
    });
    for (let j = 0; j < categoryList[i].subCategories.length; j++) {
      let subCategories: HTMLAnchorElement = document.createElement("a");

      subCategories.className = "main__menu__item";
      subCategories.href =
        "/shop.html?category=" +
        categoryList[i].id +
        "&subcategory=" +
        categoryList[i].subCategories[j].id;

      subCategories.innerHTML = categoryList[i].subCategories[j].category;

      menuContainer.appendChild(subCategories);

      subCategories.addEventListener("click", () => {
        printProducts();
        // window.history.pushState(categoryList[i].subCategories[j].category, "", categoryList[i].subCategories[j].category);
      });
    }
  }
}

// Funktionen skriver ut produkter
function printProducts(): void {
  productContainer.innerHTML = "";

  let params: URLSearchParams = new URLSearchParams(document.location.search);
  let id: number =
    parseInt(params.get("subcategory") || "0") ||
    parseInt(params.get("category") || "0");
  let headingContainer: HTMLDivElement = document.createElement("div");
  for (let i = 0; i < headingList.length; i++)
    if (id === headingList[i].category) {
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
    if (
      id === productList[i].category ||
      id === productList[i].subCategory ||
      !id
    ) {
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
      productImage.addEventListener("click", () =>
        window.history.pushState(
          productList[i].name,
          "",
          "product?name=" + productList[i].name
        )
      );

      buyButton.addEventListener("click", () => {
        console.log("When adding from buy button:", cart);
        
        if (cart.find((cart, i) =>  productList[i].id === cart.product.id)) {
          cart[i].amount++;
          printCart();
          console.log("If dublicate is found", cart);
        } else {
        cart.push(new CartItem(productList[i], 1));
        printCart();
        console.log("When adding from buy button:", cart);
        }
      });
    }
  }
}

export let cart: CartItem[] = [];
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
    let minusButton: HTMLButtonElement = document.createElement("button");
    let amount: HTMLParagraphElement = document.createElement("p");
    let addButton: HTMLButtonElement = document.createElement("button");

    productCard.className = "header__shop__card";
    productImage.className = "header__shop__image";
    productName.className = "header__shop__name";
    productPrice.className = "header__shop__price";
    minusButton.className = "header__shop__minusButton";

    productImage.src = cart[i].product.img
    productName.innerHTML = cart[i].product.name;
    productPrice.innerHTML = cart[i].product.price.toString() + "kr";
    addButton.innerHTML = "<i class='fa fa-plus' style='font-size:24px'></i>";
    minusButton.innerHTML =
    "<i class='fa fa-minus' style='font-size:24px'></i>";
    checkoutButton.innerHTML += cart[i].product.price.toString();
    amount.innerHTML = cart[i].amount.toString();

    itemContainer.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(minusButton);
    productCard.appendChild(amount);
    productCard.appendChild(addButton);
    

    sum += cart[i].product.price * cart[i].amount;
    checkoutButton.innerHTML = "Gå till kassan " + sum.toString() + " " + " kr";

    addButton.addEventListener("click", () => {
      cart[i].amount++;
      printCart();
    });

    minusButton.addEventListener("click", () => {
      if (cart[i].amount === 1) {
        cart.splice(i, 1);
        printCart();
      } else {
      cart[i].amount--;
      printCart();
      }
    });
  }
  // console.log(cart);
}

// function addCartItem(i: number): void {
//   cart[i].amount++;
//   printCart();
//   console.log(cart);
// }

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

printProducts();
