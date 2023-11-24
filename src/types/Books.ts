export interface IBook {
	id: string;
	title: string;
	category: string;
	ISBN: string;
	publishYear: number;
	publishingCompany: string;
	price: number;
	quantity: number;
	image: string;
	description: string;
}

export interface BookInput extends Omit<IBook, "id"> {}
export interface BookOutput extends Required<IBook> {}
