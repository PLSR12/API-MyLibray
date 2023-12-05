export interface IBook {
	id: string;
	title: string;
	category_id: string;
	ISBN: string;
	publishYear: number;
	publishingCompany_id: string;
	price: number;
	quantity: number;
	image: string;
	description: string;
}

export interface IBookInput extends Omit<IBook, "id"> {}
export interface IBookOutput extends Required<IBook> {}
