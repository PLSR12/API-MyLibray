import { CustomerInput, CustomersAttributes } from "types/Customers";
import Customers from "../db/models/Customers";

class CustomersService {
	async getAll() {
		return await Customers.findAll();
	}

	async create(dto: CustomersAttributes) {
		return await Customers.create(dto);
	}
	async update(dto: CustomerInput, id: string) {
		return await Customers.update(dto, { where: { id: id } });
	}
	async findOne(id: string) {
		return await Customers.findByPk(id);
	}
	async delete(id: string) {
		return await Customers.destroy({ where: { id } });
	}
}

export default CustomersService;
