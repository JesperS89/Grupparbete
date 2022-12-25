import { burger, burgerFunction } from "./services/burger";
import { closeButton, cartButton, toggleCart } from "./services/cart";

cartButton.addEventListener("click", toggleCart);
closeButton.addEventListener("click", toggleCart);
burger.addEventListener("click", burgerFunction);
