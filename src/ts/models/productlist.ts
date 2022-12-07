import { Heading, Product } from "./Product";

// export class Product {
//     constructor (public name: string, public brandName: string, public category: number, public description: string, public price: number, public img: string) {
//     }
// }

export const productList: Product[] = [
  new Product(
    "Cleansing Oil Gel",
    "No Make Up",
    1,
    "En djuprengörande olja som återfuktar och rengör",
    149,
    "https://kdiary.se/wp-content/uploads/2020/10/Purito_from_green_cleansing_oil.png",
    1
  ),
  new Product(
    "Beauty Oil",
    "No Make up",
    2,
    "En olja som gör dig vacker",
    99,
    "../assets/images/beauty-oil-2.jpg",
    2
  ),
  new Product(
    "Pore Refining Serum",
    "No Make Up",
    3,
    "Ett serum som tar bort porer",
    79,
    "../assets/images/face-serum.jpg",
    3
  ),
  //   new Product("NAMN", "MÄRKE", 0, "BESKRIVNING", 79, "IMGURL", 3),
];

export const headingList: Heading[] = [
  new Heading(
    "Ansiktsvård",
    "Surfa bland våra premiuprodukter inom ansiktsvård",
    1
  ),
];