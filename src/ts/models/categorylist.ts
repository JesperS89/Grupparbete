import { Category } from "./category";

export const categoryList: Category[] = [
  new Category(1, "Ansiktsvård", [
    new Category(101, "Dagkräm"),
    new Category(102, "Serum"),
  ]),
  new Category(2, "Kroppsvård", [
    new Category(201, "Hudkräm"),
    new Category(202, "Fotkräm"),
  ]),
  new Category(3, "Solskydd", [
    new Category(301, "-15"),
    new Category(302, "15-30"),
    new Category(303, "30+"),
  ]),
];
