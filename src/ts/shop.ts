import { categoryList } from "./models/categorylist";
import { productList } from "./models/productlist";
import { CartItem } from "./models/cartItem";
import { burger, burgerFunction } from "./services/burger";
import { closeButton, cartButton, toggleCart } from "./services/cart";
import { getFromLs } from "./services/localstorage";
import { cart } from "./services/localstorage";
import { printCart } from "./services/printCart";

let menuContainer: HTMLDivElement = document.getElementById(
  "menu"
) as HTMLDivElement;
let productContainer: HTMLDivElement = document.getElementById(
  "products"
) as HTMLDivElement;
// Main har ingen datatyp?
let main: any = document.getElementById("main");

burger.addEventListener("click", burgerFunction);
cartButton.addEventListener("click", toggleCart);
closeButton.addEventListener("click", toggleCart);
// Funktionen skriver ut menyn

function printMenu(): void {
  for (let i = 0; i < categoryList.length; i++) {
    let category: HTMLAnchorElement = document.createElement("a");
    category.className = "main__menu__heading";
    category.href = "/shop.html?category=" + categoryList[i].id;

    category.innerHTML = categoryList[i].category;

    menuContainer.appendChild(category);

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
    }
  }
}
let categoryMenuBackground: HTMLDivElement = document.createElement("div");

// Funktionen togglar menyn för kategorier i mobilläget
function toggleCategoryMenu() {
  menuContainer.classList.toggle("active");
  if (menuContainer.className === "main__menu active") {
    categoryMenuBackground.className = "main__background";
    productContainer.appendChild(categoryMenuBackground);
    categoryMenuBackground.addEventListener("click", toggleCategoryMenu);
    productContainer.removeEventListener;
  } else {
    productContainer.removeEventListener;
    productContainer.removeChild(categoryMenuBackground);
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

  let heading: HTMLHeadingElement = document.createElement("h2");

  headingContainer.className = "product__headingcontainer";
  heading.className = "product__heading";

  heading.innerHTML = "Visa Kategorier";
  main.appendChild(headingContainer);
  headingContainer.appendChild(heading);
  headingContainer.addEventListener("click", toggleCategoryMenu);

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
      let productLink: HTMLAnchorElement = document.createElement("a");
      let imgContainer: HTMLDivElement = document.createElement("div");

      productCard.className = "card";
      productLink.className = "card__link";
      productImage.className = "card__image";
      productName.className = "card__name";
      productBrand.className = "card__brand";
      productPrice.className = "card__price";
      buyButton.className = "card__button";
      imgContainer.className = "card__imgcontainer";

      productImage.src = productList[i].img;
      productName.innerHTML = productList[i].name;
      productBrand.innerHTML = productList[i].brandName;
      productPrice.innerHTML = productList[i].price.toString() + " kr";
      buyButton.innerHTML = "Lägg i Varukorg";

      productInnerContainer.appendChild(productCard);
      productCard.appendChild(productLink);
      productLink.appendChild(imgContainer);
      imgContainer.appendChild(productImage);
      productLink.appendChild(productName);
      productLink.appendChild(productBrand);
      productLink.appendChild(productPrice);
      productCard.appendChild(buyButton);

      productLink.href =
        "/shop.html?category=" +
        productList[i].category +
        "&subcategory=" +
        productList[i].subCategory +
        "&product=" +
        productList[i].id;

      buyButton.addEventListener("click", () => {
        let existingItem: CartItem | undefined = cart.find(
          (cart) => productList[i].id === cart.product.id
        );
        if (existingItem) {
          existingItem.amount++;
          printCart();
        } else {
          cart.push(new CartItem(productList[i], 1));
          printCart();
        }
      });
    }
  }
}

printMenu();
let modal: HTMLDivElement = document.getElementById("modal") as HTMLDivElement;
// Funktion för att visa produkten du klickar på för extra beskrivning och information
function productDisplay(): void {
  productContainer.innerHTML = "";

  let params: URLSearchParams = new URLSearchParams(document.location.search);
  let id: number = parseInt(params.get("product") || "0");

  for (let i = 0; i < productList.length; i++) {
    if (id === productList[i].id) {
      let productDisplay: HTMLDivElement = document.createElement("div");
      let imageContainer: HTMLDivElement = document.createElement("div");
      let infoContainer: HTMLDivElement = document.createElement("div");
      let productImage: HTMLImageElement = document.createElement("img");
      let productName: HTMLHeadingElement = document.createElement("h3");
      let productBrand: HTMLHeadingElement = document.createElement("h4");
      let productDescription: HTMLSpanElement = document.createElement("span");
      let productPrice: HTMLHeadingElement = document.createElement("h5");
      let buyButton: HTMLButtonElement = document.createElement("button");
      let closeButton: HTMLButtonElement = document.createElement("button");

      productDisplay.className = "productDisplay";
      imageContainer.className = "productDisplay__imageContainer";
      infoContainer.className = "productDisplay__infoContainer";
      productImage.className = "productDisplay__image";
      productName.className = "productDisplay__name";
      productBrand.className = "productDisplay__brand";
      productDescription.className = "productDisplay__description";
      productPrice.className = "productDisplay__price";
      buyButton.className = "productDisplay__button";
      closeButton.className = "productDisplay__closeButton";

      productImage.src = productList[i].img;
      productName.innerHTML = productList[i].name;
      productBrand.innerHTML = productList[i].brandName;
      productDescription.innerHTML = productList[i].description;
      productPrice.innerHTML = productList[i].price.toString() + " kr";
      buyButton.innerHTML = "Lägg i Varukorg";
      closeButton.innerHTML = "<i class='fa-sharp fa-solid fa-xmark'></i>";

      modal.appendChild(productDisplay);
      productDisplay.appendChild(imageContainer);
      productDisplay.appendChild(infoContainer);
      imageContainer.appendChild(productImage);
      infoContainer.appendChild(productName);
      infoContainer.appendChild(productBrand);
      infoContainer.appendChild(productPrice);
      infoContainer.appendChild(buyButton);
      productDisplay.appendChild(closeButton);

      infoContainer.appendChild(productDescription);
      document.title = productList[i].name;
      closeButton.addEventListener("click", () => {
        history.back();
      });

      buyButton.addEventListener("click", () => {
        let existingItem: CartItem | undefined = cart.find(
          (cart) => productList[i].id === cart.product.id
        );

        if (existingItem) {
          existingItem.amount++;
          printCart();
        } else {
          cart.push(new CartItem(productList[i], 1));
          printCart();
        }
      });
      modal.classList.toggle("active");
      document.body.classList.toggle("overflow-hidden");
    }
  }
}

productDisplay();

printProducts();
getFromLs();
