export class Product {
  constructor(
    public name: string,
    public brandName: string,
    public category: number,
    public subCategory:number,
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
// Produktnamn som string, Varumärke som string, Kategori som nummer (ev. ändra till string senare), Beskrivning av produkten, Pris, Img-url (länk till assets-mapp?)
