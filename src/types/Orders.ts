import { IBook } from "./Books";

export interface OrdersAttributes {
	id: string;
	date: Date;
	status: number;
	customer_id: string;
}

export interface OrderInput extends OrdersAttributes {
	books: IBooksOrderInput[];
}

interface IBooksOrderInput {
	quantity: number;
	price: number;
	id: string;
}

export interface OrderOutput extends Required<OrdersAttributes> {}
