import { saveToLs } from "./localstorage";
import { cart } from "./localstorage";


export let shop: HTMLDivElement = document.getElementById("shop") as HTMLDivElement;
export let itemContainer: HTMLDivElement = document.createElement("div");
export let checkoutContainer: HTMLDivElement = document.createElement("div");
itemContainer.className = "header__shopcontainer";
checkoutContainer.className = "header__shop__checkoutcontainer";
shop.appendChild(itemContainer);
shop.appendChild(checkoutContainer);
export let checkoutButton: HTMLButtonElement = document.createElement("button");
checkoutContainer.appendChild(checkoutButton);
checkoutButton.className = "header__shop__checkoutbutton";
export let sum: number = 0;
export let counter: number = 0;

checkoutButton.innerHTML = "Gå till kassan " + sum.toString() + " " + " kr";

// Funktionen skriver ut varukorgen

export let cartContainer: HTMLDivElement = document.getElementById(
  "header__shopcart"
) as HTMLDivElement;
export let cartCount: HTMLParagraphElement = document.createElement(
  "p"
) as HTMLParagraphElement;

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
      minusButton.innerHTML = "<i class='fa fa-minus'</i>";
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
      checkoutButton.addEventListener("click", () => {
        location.href = "./checkout.html";
    })
  
      addButton.addEventListener("click", () => {
        cart[i].amount++;
        printCart();
      });
  
      minusButton.addEventListener("click", () => {
        if (cart[i].amount === 1) {
          if (confirm('Är du säker på att du inte vill ha ' + cart[i].product.name + "?") === true) {
          cart.splice(i, 1);
          printCart();
        }} 
        else {
          cart[i].amount--;
          printCart();
        }
    });
    }
  }
