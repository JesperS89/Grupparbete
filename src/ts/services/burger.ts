export let burger: HTMLDivElement = document.getElementById(
  "burger"
) as HTMLDivElement;
export let nav: HTMLUListElement = document.getElementById(
  "nav"
) as HTMLUListElement;
export let burgerBackground: HTMLDivElement = document.createElement("div");

burgerBackground.className = "burgerbackground";

export function burgerFunction() {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
  if (burger.className === "header__burger active") {
    burgerBackground.addEventListener("click", burgerFunction);

    document.body.appendChild(burgerBackground);
  } else {
    document.body.removeChild(burgerBackground);
    burgerBackground.removeEventListener;
  }
}
