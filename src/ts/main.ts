let burger: HTMLDivElement = document.getElementById(
  "burger"
) as HTMLDivElement;

let nav: HTMLUListElement = document.getElementById("nav") as HTMLUListElement;
let cart: HTMLLIElement = document.getElementById("cart") as HTMLLIElement;
let shop: HTMLDivElement = document.getElementById("shop") as HTMLDivElement;

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});

cart.addEventListener("click", () => {
  shop.classList.toggle("active");
});
