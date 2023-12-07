import { IBook } from "./Books";

export interface OrderItemsAttributes {
	id: string;
	quantity: number;
	book_id: string;
	order_id: string;
	price: number;
}

export interface OrderItemsAttributesWithBooks extends OrderItemsAttributes {
	book: IBook;
}

export interface BookForOrderItem {
	title: string;
	image: string;
	ISBN: string;
	price: number;
	quantity: number;
}

export interface OrderItemInput extends OrderItemsAttributes {}
export interface OrderItemOutput extends Required<OrderItemsAttributes> {}
