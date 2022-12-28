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

// (document.getElementById("form") as HTMLFormElement).addEventListener(
//   "submit",
//   (e: SubmitEvent) => {
//     e.preventDefault();

//     console.log("Wohoo!");
//   }
// );

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  console.log("hej");
});

// submitbutton.addEventListener("submit", (e: SubmitEvent) => {
//   e.preventDefault();
// });

// $("#email_form").submit(function(event){
//     var isValid = true;

//     // do all your validation here
//     // potentially if one of the fields is empty
//     // isValid will be set to false

//     if (!isValid) {
//         event.preventDefault();
//     }
// });

getFromLs();
