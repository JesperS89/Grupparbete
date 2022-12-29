import { CartItem } from "./models/cartItem";
import { Product } from "./models/Product";

import { burger, burgerFunction } from "./services/burger";

import { closeButton, cartButton, toggleCart } from "./services/cart";
import { saveToLs, getFromLs } from "./services/localstorage";
import { cart } from "./services/localstorage";

cartButton.addEventListener("click", toggleCart);
closeButton.addEventListener("click", toggleCart);
burger.addEventListener("click", burgerFunction);

let form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;

let sum: number = 0;
let cartDiv: HTMLDivElement = document.getElementById(
  "cartcontainer"
) as HTMLDivElement;
let checkoutCartContainer: HTMLDivElement = document.createElement("div");
let cartTitle: HTMLHeadingElement = document.createElement("h3");
let totalSum: HTMLHeadingElement = document.createElement("h4");
let titleContainer: HTMLDivElement = document.createElement("div");

export function printCheckoutCart(): void {
  saveToLs();
  totalSum.innerHTML = "";
  checkoutCartContainer.innerHTML = "";

  cartDiv.appendChild(checkoutCartContainer);
  checkoutCartContainer.appendChild(titleContainer);
  titleContainer.appendChild(cartTitle);
  if (checked === true) {
    checkoutCartContainer.className = "innercartcontainer active";
  }
  if (checked === false) {
    checkoutCartContainer.className = "innercartcontainer";
  }

  titleContainer.className = "titlecontainer";
  cartTitle.className = "titlecontainer__title";

  cartTitle.innerHTML = "Varukorg";

  sum = 0;

  for (let i = 0; i < cart.length; i++) {
    let productCard: HTMLDivElement = document.createElement("div");
    let productImage: HTMLImageElement = document.createElement("img");
    let productName: HTMLHeadingElement = document.createElement("h5");
    let productPrice: HTMLHeadingElement = document.createElement("h6");
    let btnContainer: HTMLDivElement = document.createElement("div");
    let minusButton: HTMLButtonElement = document.createElement("button");
    let amount: HTMLParagraphElement = document.createElement("p");
    let addButton: HTMLButtonElement = document.createElement("button");

    productCard.className = "innercartcontainer__prodcard";
    productImage.className = "innercartcontainer__prodcard__image";
    productName.className = "innercartcontainer__prodcard__name";
    productPrice.className = "innercartcontainer__prodcard__price";
    btnContainer.className = "innercartcontainer__btncontainer";
    minusButton.className = "innercartcontainer__btncontainer__minusbutton";
    totalSum.className = "innercartcontainer__total";

    productImage.src = cart[i].product.img;
    productName.innerHTML = cart[i].product.name;
    productPrice.innerHTML = cart[i].product.price.toString() + "kr";
    addButton.innerHTML = "<i class='fa fa-plus'</i>";
    minusButton.innerHTML = "<i class='fa fa-minus'</i>";
    amount.innerHTML = cart[i].amount.toString();

    checkoutCartContainer.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    checkoutCartContainer.appendChild(totalSum);
    productCard.appendChild(btnContainer);
    btnContainer.appendChild(minusButton);
    btnContainer.appendChild(amount);
    btnContainer.appendChild(addButton);

    sum += cart[i].product.price * cart[i].amount;
    totalSum.innerHTML = "Totalt" + " " + sum.toString() + " " + " kr";

    addButton.addEventListener("click", () => {
      cart[i].amount++;
      printCheckoutCart();
    });

    minusButton.addEventListener("click", () => {
      if (cart[i].amount === 1) {
        if (
          confirm(
            "Är du säker på att du inte vill ha " + cart[i].product.name + "?"
          ) === true
        ) {
          cart.splice(i, 1);
          printCheckoutCart();
        }
      } else {
        cart[i].amount--;
        printCheckoutCart();
      }
    });
  }
}

let openCart: HTMLHeadingElement = document.getElementById(
  "showcart"
) as HTMLHeadingElement;
let checked = false;

openCart.addEventListener("click", () => {
  checkoutCartContainer.classList.toggle("active");
  checked = !checked;
  if (checked === false) {
    openCart.innerHTML = "Visa varukorg <i class='fa fa-chevron-down'></i>";
  } else {
    openCart.innerHTML = "Dölj varukorg <i class='fa fa-chevron-up'></i>";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
  cart.length = 0;
  saveToLs();
  printCheckoutCart();
});

getFromLs();
printCheckoutCart();
