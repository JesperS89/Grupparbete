export let cartButton: HTMLLIElement = document.getElementById(
  "cart"
) as HTMLLIElement;
export let shop: HTMLDivElement = document.getElementById(
  "shop"
) as HTMLDivElement;
export let closeButton: HTMLButtonElement = document.getElementById(
  "closebutton"
) as HTMLButtonElement;

export let cartBackground: HTMLDivElement = document.createElement("div");

cartBackground.className = "cartbackground";

// cart.addEventListener("click", () => {
//     shop.classList.toggle("active");
//   });

//   closebutton.addEventListener("click", () => {
//     shop.classList.remove("active");
//   });

export function toggleCart() {
  shop.classList.toggle("active");

  if (shop.className === "header__shop active") {
    cartBackground.addEventListener("click", toggleCart);
    document.body.appendChild(cartBackground);
  } else {
    document.body.removeChild(cartBackground);
    cartBackground.removeEventListener;
  }
}
