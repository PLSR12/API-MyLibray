export interface CategoriesAttributes {
	id: string;
	name: string;
	description: string;
	image: string;
}

export interface CategoryInput extends Omit<CategoriesAttributes, "id"> {}
export interface CategoryOutput extends Required<CategoriesAttributes> {}
