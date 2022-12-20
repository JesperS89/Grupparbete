
import { CartItem } from "./models/cartItem";
import { Product } from "./models/Product";
import { productList } from "./models/productlist";

let cart: CartItem[] = [];

let sum: number = 0;
let cartDiv: HTMLDivElement = document.getElementById("checkout__cartcontainer") as HTMLDivElement;
let totalSum: HTMLHeadingElement = document.createElement("h4");

export function printCart ():void {
saveToLs(); 
sum = 0;
totalSum.innerHTML = "";
cartDiv.innerHTML = "";

for (let i=0; i < cart.length; i++) {
    
    let productCard: HTMLDivElement = document.createElement("div");
    let productImage: HTMLImageElement = document.createElement("img");
    let productName: HTMLHeadingElement = document.createElement("h5");
    let productPrice: HTMLHeadingElement = document.createElement("h6")
    let btnContainer: HTMLDivElement = document.createElement("div");
    let minusButton: HTMLButtonElement = document.createElement("button");
    let amount: HTMLParagraphElement = document.createElement("p");
    let addButton: HTMLButtonElement = document.createElement("button");
    

    productCard.className = "header__shop__card";
    productImage.className = "header__shop__image";
    productName.className = "header__shop__name";
    productPrice.className = "header__shop__price";
    btnContainer.className = "header__btncontainer";
    minusButton.className = "header__btncontainer__minusButton";
    totalSum.className = "checkout__total";

    productImage.src = cart[i].product.img;
    productName.innerHTML = cart[i].product.name;
    productPrice.innerHTML = cart[i].product.price.toString() + "kr";
    addButton.innerHTML = "<i class='fa fa-plus'</i>";
    minusButton.innerHTML =
      "<i class='fa fa-minus'</i>";
    amount.innerHTML = cart[i].amount.toString();  

    cartDiv.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice); 
    cartDiv.appendChild(totalSum);
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

function saveToLs() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
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