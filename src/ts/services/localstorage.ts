import { Product } from "../models/Product";
import { CartItem } from "../models/cartItem";
import { printCart } from "./printCart";

export let cart: CartItem[] = [];

export function saveToLs() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function getFromLs() {
  let cartFromLs: string = localStorage.getItem("cart") || "";
  let cartObject: CartItem[] = JSON.parse(cartFromLs);

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
}
