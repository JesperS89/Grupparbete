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
    "https://www.rgdaily.com/wp-content/uploads/2019/08/no-makeup-cosmetics-beauty-product-photography-rebecca-goddard-rgdaily-blog-15.jpg",
    1
  ),
  new Product(
    "Beauty Oil",
    "No Make up",
    1,
    "En olja som gör dig vacker",
    99,
    "https://www.rgdaily.com/wp-content/uploads/2019/08/no-makeup-cosmetics-beauty-product-photography-rebecca-goddard-rgdaily-blog-9.jpg",
    2
  ),
  new Product(
    "Pore Refining Serum",
    "No Make Up",
    1,
    "Ett serum som tar bort porer",
    79,
    "https://www.rgdaily.com/wp-content/uploads/2019/08/no-makeup-cosmetics-beauty-product-photography-rebecca-goddard-rgdaily-blog-7.jpg",
    3
  ),

  new Product(
    "Cleansing oil", 
    "No Make Up", 
    1, 
    "Ansiktskräm som rengör på djupet", 
    129, 
    "https://www.rgdaily.com/wp-content/uploads/2019/08/no-makeup-cosmetics-beauty-product-photography-rebecca-goddard-rgdaily-blog-5.jpg",
    4 
  ),
  new Product(
    "Serum", 
    "No Make Up", 
    1, 
    "Serum som återfuktar", 
    99, 
    "https://www.rgdaily.com/wp-content/uploads/2019/08/no-makeup-cosmetics-beauty-product-photography-rebecca-goddard-rgdaily-blog-14.jpg", 
    5
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
