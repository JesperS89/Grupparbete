import { printCart } from "./shop";
let burger: HTMLDivElement = document.getElementById(
  "burger"
) as HTMLDivElement;

let nav: HTMLUListElement = document.getElementById("nav") as HTMLUListElement;
let cart: HTMLLIElement = document.getElementById("cart") as HTMLLIElement;
let shop: HTMLDivElement = document.getElementById("shop") as HTMLDivElement;
let closebutton: HTMLButtonElement = document.getElementById(
  "closebutton"
) as HTMLButtonElement;

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});

cart.addEventListener("click", () => {
  shop.classList.toggle("active");
});

closebutton.addEventListener("click", () => {
  shop.classList.remove("active");
});

// Funktion som visar antalet produkter i varukorg 


