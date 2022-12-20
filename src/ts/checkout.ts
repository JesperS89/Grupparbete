// import { CartItem } from "./models/cartItem";
// import { Product } from "./models/Product";
// import { productList } from "./models/productlist";


// let cart: CartItem[] = [];



// let cartDiv: HTMLDivElement = document.getElementById("checkout__cartcontainer") as HTMLDivElement;

// for (let i=0; i < cart.length; i++) {
//     let productCard: HTMLDivElement = document.createElement("div");
//     let productImage: HTMLImageElement = document.createElement("img");
//     let productName: HTMLHeadingElement = document.createElement("h5");
//     let productPrice: HTMLHeadingElement = document.createElement("h6")

//     productCard.className = "header__shop__card";
//     productImage.className = "header__shop__image";
//     productName.className = "header__shop__name";
//     productPrice.className = "header__shop__price";

//     productImage.src = cart[i].product.img;
//     productName.innerHTML = cart[i].product.name;
//     productPrice.innerHTML = cart[i].product.price.toString() + "kr";
    
    
    
// }

// function saveToLs() {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }
  
  // function getFromLs() {
  //   let cartFromLs: string = localStorage.getItem("cart") || "";
  //   let cartObject = JSON.parse(cartFromLs);
  
  //   cart = cartObject.map((cart: CartItem) => {
  //     return new CartItem(
  //       new Product(
  //         cart.product.name,
  //         cart.product.brandName,
  //         cart.product.category,
  //         cart.product.subCategory,
  //         cart.product.description,
  //         cart.product.price,
  //         cart.product.img,
  //         cart.product.id
  //       ),
  //       cart.amount
  //     );
  //   });
  //   // printCart();
  //   console.log(cart);
  // }

  // getFromLs();