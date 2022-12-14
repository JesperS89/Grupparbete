export class Product {
  constructor(
    public name: string,
    public brandName: string,
    public category: number,
    public subCategory: number,
    public description: string,
    public price: number,
    public img: string,
    public id: number
  ) {}
}

export class Heading {
  constructor(
    public heading: string,
    public text: string,
    public category: number
  ) {}
}
