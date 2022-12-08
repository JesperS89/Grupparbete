import { Category } from "./category";

export const categoryList: Category[] = [
  new Category(1, "Ansiktsvård", [
    new Category(2, "Dagkräm"),
    new Category(3, "Serum"),
  ]),
  new Category(4, "Kroppsvård", [
    new Category(5, "Dusch"),
    new Category(6, "Lotion"),
  ]),
];
