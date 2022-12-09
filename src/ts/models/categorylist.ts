import { Category } from "./category";

export const categoryList: Category[] = [
  new Category(1, "Ansiktsvård", [
    new Category(101, "Dagkräm"),
    new Category(102, "Serum"),
  ]),
  new Category(2, "Kroppsvård"),
  new Category(3, "Solskydd"),
];
