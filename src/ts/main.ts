import { burger, burgerFunction } from "./services/burger";
import { closeButton, cartButton, toggleCart } from "./services/cart";
import { getFromLs } from "./services/localstorage";

cartButton.addEventListener("click", toggleCart);
closeButton.addEventListener("click", toggleCart);
burger.addEventListener("click", burgerFunction);

let indexbutton: HTMLButtonElement = document.getElementById("indexbutton") as HTMLButtonElement;

indexbutton.addEventListener("click", () => {
    location.href = "./shop.html";
})

getFromLs();