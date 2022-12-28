import { burger, burgerFunction } from "./services/burger";
import { closeButton, cartButton, toggleCart } from "./services/cart";
import { saveToLs, getFromLs } from "./services/localstorage";
import { shop } from "./services/cart";
import { checkoutButton, checkoutContainer, counter, itemContainer, printCart, sum } from "./services/printCart";
import { cartContainer } from "./services/printCart";
import { cartCount } from "./services/printCart";

cartButton.addEventListener("click", toggleCart);
closeButton.addEventListener("click", toggleCart);
burger.addEventListener("click", burgerFunction);

let indexbutton: HTMLButtonElement = document.getElementById("indexbutton") as HTMLButtonElement;

indexbutton.addEventListener("click", () => {
    location.href = "./shop.html";
})

getFromLs();