import { CartItem } from "./models/cartItem";
import { Product } from "./models/Product";
import { productList } from "./models/productlist";

let cart: CartItem[] = [];

let sum: number = 0;
let cartDiv: HTMLDivElement = document.getElementById("checkout__cartcontainer") as HTMLDivElement;
let cartContainer: HTMLDivElement = document.createElement("div");
let cartTitle: HTMLHeadingElement = document.createElement("h3");
let totalSum: HTMLHeadingElement = document.createElement("h4");
let titleContainer: HTMLDivElement = document.createElement("div");

export function printCart(): void {
  saveToLs();
  totalSum.innerHTML = "";
  cartContainer.innerHTML = "";

  cartDiv.appendChild(cartContainer);
  cartContainer.appendChild(titleContainer);
  titleContainer.appendChild(cartTitle);

  cartContainer.className = "innercartcontainer";
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

    cartContainer.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    cartContainer.appendChild(totalSum);
    productCard.appendChild(btnContainer);
    btnContainer.appendChild(minusButton);
    btnContainer.appendChild(amount);
    btnContainer.appendChild(addButton);

    sum += cart[i].product.price * cart[i].amount;
    totalSum.innerHTML = "Totalt" + " " + sum.toString() + " " + " kr";

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
let checkoutForm: HTMLFormElement = document.getElementById(
  "checkoutform"
) as HTMLFormElement;
let openCart: HTMLHeadingElement = document.getElementById(
  "showcart"
) as HTMLHeadingElement;

let checked = false;

openCart.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
  checked = !checked;
  if (checked === false) {
    openCart.innerHTML = "Visa varukorg <i class='fa fa-chevron-down'></i>";
  } else {
    openCart.innerHTML = "Dölj varukorg <i class='fa fa-chevron-up'></i>";
  }
});

function saveToLs() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

checkoutForm.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
});
function getFromLs() {
  let cartFromLs: string = localStorage.getItem("cart") || "";
  let cartObject = JSON.parse(cartFromLs);

  cart = cartObject.map((cart: CartItem) => {
    return new CartItem(
      new Product(
        cart.product.name,
        cart.product.brandName,
        cart.product.category,
        cart.product.subCategory,
        cart.product.description,
        cart.product.price,
        cart.product.img,
        cart.product.id
      ),
      cart.amount
    );
  });
  printCart();
  console.log(cart);
}

getFromLs();
