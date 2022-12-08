import { Category } from "./category";

export const categoryList: Category[] = [
  new Category(1, "Ansiktsvård", [
    new Category(101, "Dagkräm"),
    new Category(102, "Serum"),
  ]),
  new Category(2, "Kroppsvård", [
    new Category(201, "Dusch"),
    new Category(202, "Lotion"),
    new Category(203, "hej"),
  ]),
];
