export class Product {
    constructor (public name: string, public brandName: string, public category: number, public description: string, public price: number, public img: string) {
    }
}
// Produktnamn som string, Varumärke som string, Kategori som nummer (ev. ändra till string senare), Beskrivning av produkten, Pris, Img-url (länk till assets-mapp?)