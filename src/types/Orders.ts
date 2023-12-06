export interface OrdersAttributes {
	id: string;
	date: Date;
	status: number;
	customer_id: string;
}

export interface OrderInput extends Omit<OrdersAttributes, "id"> {}
export interface OrderOutput extends Required<OrdersAttributes> {}
