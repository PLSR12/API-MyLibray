export interface CustomersAttributes {
	id: string;
	name: string;
	password_hash: string;
	telephone: string;
	email: string;
	cpf: string;
	cep: string;
	address: string;
	city: string;
	district: string;
	state: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface CustomerInput extends Omit<CustomersAttributes, "id"> {}
export interface CustomerOutput extends Required<CustomersAttributes> {}
