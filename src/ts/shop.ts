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
    category.href = "/shop.html?a=category=" + categoryList[i].id;

    category.innerHTML = categoryList[i].category;

    menuContainer.appendChild(category);

    category.addEventListener("click", () => {
      printProducts();
    });
    for (let j = 0; j < categoryList[i].subCategories.length; j++) {
      let subCategories: HTMLAnchorElement = document.createElement("a");

      subCategories.className = "main__menu__item";
      subCategories.href =
        "/shop.html?a=category=" +
        categoryList[i].id +
        "&subcategory=" +
        categoryList[i].subCategories[j].id;

      subCategories.innerHTML = categoryList[i].subCategories[j].category;

      menuContainer.appendChild(subCategories);

      subCategories.addEventListener("click", () => {
        printProducts();
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
      let productLink: HTMLAnchorElement =document.createElement("a");

      productCard.className = "card";
      productLink.className = "card__link";
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
      productCard.appendChild(productLink);
      productLink.appendChild(productImage);
      productLink.appendChild(productName);
      productLink.appendChild(productBrand);
      productLink.appendChild(productPrice);
      productCard.appendChild(buyButton);

      productLink.href = "/shop.html?category=" + productList[i].category + "&subcategory=" + productList[i].subCategory + "&product=" + productList[i].id;

      productLink.addEventListener("click", () => {
        productDisplay();
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
let counter:number = 0;

checkoutButton.innerHTML = "Gå till kassan " + sum.toString() + " " + " kr";

// Funktionen skriver ut varukorgen

let cartContainer:HTMLDivElement = document.getElementById("header__shopcart") as HTMLDivElement;
let cartCount:HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;

cartContainer.appendChild(cartCount);

cartCount.className = "header__shopcart__counter";

export function printCart(): void {
  saveToLs();

  itemContainer.innerHTML = "";
  checkoutButton.innerHTML = "";
  cartCount.innerHTML = "";
  sum = 0;
  counter = 0;
  

  

  for (let i = 0; i < cart.length; i++) {
    let productCard: HTMLDivElement = document.createElement("div");
    let productImage: HTMLImageElement = document.createElement("img");
    let productName: HTMLHeadingElement = document.createElement("h5");
    let productPrice: HTMLHeadingElement = document.createElement("h6");
    let btnContainer: HTMLDivElement = document.createElement("div");
    let minusButton: HTMLButtonElement = document.createElement("button");
    let amount: HTMLParagraphElement = document.createElement("p");
    let addButton: HTMLButtonElement = document.createElement("button");
    

    productCard.className = "header__shop__card";
    productImage.className = "header__shop__image";
    productName.className = "header__shop__name";
    productPrice.className = "header__shop__price";
    minusButton.className = "header__btncontainer__minusButton";
    btnContainer.className = "header__btncontainer";


    productImage.src = cart[i].product.img;
    productName.innerHTML = cart[i].product.name;
    productPrice.innerHTML = cart[i].product.price.toString() + "kr";
    addButton.innerHTML = "<i class='fa fa-plus'</i>";
    minusButton.innerHTML =
      "<i class='fa fa-minus'</i>";
    checkoutButton.innerHTML += cart[i].product.price.toString();
    amount.innerHTML = cart[i].amount.toString();

    itemContainer.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(btnContainer);
    btnContainer.appendChild(minusButton);
    btnContainer.appendChild(amount);
    btnContainer.appendChild(addButton);
    

    counter += cart[i].amount;
    cartCount.innerHTML = " " + counter.toString();
    

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
}





   




printMenu();
let modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement;
// Funktion för att visa produkten du klickar på för extra beskrivning och information
function productDisplay(): void {
  productContainer.innerHTML = "";

  let params: URLSearchParams = new URLSearchParams(document.location.search);
  let id: number =
    parseInt(params.get("product") || "0");

    for (let i = 0; i < productList.length; i++) {
      if (id === productList[i].id) {  
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

  productImage.src = productList[i].img;
  productName.innerHTML = productList[i].name;
  productBrand.innerHTML = productList[i].brandName;
  productDescription.innerHTML = productList[i].description;
  productPrice.innerHTML = productList[i].price.toString() + " kr";
  buyButton.innerHTML = "Lägg i Varukorg";

  modal.appendChild(productDisplay);
  productDisplay.appendChild(productImage);
  productDisplay.appendChild(productName);
  productDisplay.appendChild(productBrand);
  productDisplay.appendChild(productDescription);
  productDisplay.appendChild(productPrice);
  productDisplay.appendChild(buyButton);

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
    }});

  modal.showModal();
}
}
}

function saveToLs() {
  localStorage.setItem("cart", JSON.stringify(cart));
  
}

function getFromLs() {
  let cartFromLs:string = localStorage.getItem("cart") || "";
  let cartObject = JSON.parse(cartFromLs);
  console.log(cartObject);
  cart = cartObject.map((cart:CartItem) => {return new CartItem(new Product(cart.product.name, cart.product.brandName, cart.product.category, cart.product.subCategory, cart.product.description, cart.product.price, cart.product.img, cart.product.id), cart.amount);
  }); 
  printCart(); 
}
 



getFromLs();


productDisplay();

printProducts();