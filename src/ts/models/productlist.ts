import { Heading, Product } from "./Product";

// export class Product {
//     constructor (public name: string, public brandName: string, public category: number, public description: string, public price: number, public img: string) {
//     }
// }

export const productList: Product[] = [
  new Product(
    "Natural Moisturiser",
    "The Ordinary",
    1,
    2,
    "En djuprengörande olja som återfuktar och rengör",
    149,
    "https://lp.stories.com/app005prod?set=source[/fa/79/fa7959ae3798fce3d2cec77e817c4eb372196d92.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]",
    1
  ),
  new Product(
    "Squalene Cleanser",
    "The Ordinary",
    1,
    2,
    "En olja som gör dig vacker",
    99,
    "https://lp.stories.com/app005prod?set=source[/34/5f/345fecd0972988f18cae5d3bbd69edb8a2a0f4bf.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]",
    2
  ),
  new Product(
    "Vitamin C 23+HA 2",
    "The Ordinary",
    1,
    2,
    "Ett serum som tar bort porer",
    79,
    "https://lp.stories.com/app005prod?set=source[/f6/44/f6448855d689634ff20cc7fd8d022eda562501b6.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]",
    3
  ),

  new Product(
    "Vitamin E Mask", 
    "Klairs", 
    1, 
    2,
    "Ansiktskräm som rengör på djupet", 
    129, 
    "https://lp.stories.com/app005prod?set=source[02_0829263_001_1],type[PRODUCT],device[hdpi],quality[80],ImageVersion[201912191428]&call=url[file:/product/main]",
    4 
  ),
  new Product(
    "Youthful Glow Sugar Mask", 
    "Klairs", 
    1, 
    2,
    "Serum som återfuktar", 
    99, 
    "https://lp.stories.com/app005prod?set=source[/82/a0/82a0f72551f8eb56b8673ee3b2b471bdea877050.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]", 
    5
  ),

  new Product(
    "Daily Hydra Cream",
    "Woods Copenhagen",
    1,
    2,
    "Serum för extra glans",
    99,
    "https://lp.stories.com/app005prod?set=source[/08/1b/081bfe72f715af12b9815ed0cf48452cf3886d76.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]",
    6
  ),
  new Product(
    "Niacinamide Super Serum",
    "The Ordinary",
    1,
    3,
    "Serum för extra glans",
    99,
    "https://lp.stories.com/app005prod?set=source[/1d/b1/1db1b6869f9e6443d1dfa0a0e7da082103ca9a56.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]",
    7
  ),
  new Product(
    "Buffet + Copper Peptides 1 %",
    "The Ordinary",
    1,
    3,
    "Serum för mjukgörande effekt",
    129,
    "https://lp.stories.com/app005prod?set=source[/2d/39/2d398e7c6eb67071676c6fb22d850e3820ffe29a.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/main]",
    8

  )
]

export const headingList: Heading[] = [
  new Heading(
    "Ansiktsvård",
    "Surfa bland våra premiuprodukter inom ansiktsvård",
    1
  ),
];
