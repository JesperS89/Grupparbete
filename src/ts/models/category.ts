export class Category {
  constructor(
    public id: number,
    public category: string,
    public subCategories: Category[] = []
  ) {}
}
