import { burger, burgerFunction } from "./services/burger";
import { closeButton, cartButton, toggleCart } from "./services/cart";
import { saveToLs, getFromLs } from "./services/localstorage";
import { cart } from "./services/localstorage";

cartButton.addEventListener("click", toggleCart);
closeButton.addEventListener("click", toggleCart);
burger.addEventListener("click", burgerFunction);

let submitbutton: HTMLButtonElement = document.getElementById(
  "submitbutton"
) as HTMLButtonElement;

let form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  console.log("hej");
});


getFromLs();
