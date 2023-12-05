import { CustomerInput, CustomersAttributes } from "types/Customers";
import Customers from "../db/models/Customers";
import ErrorNotFound from "../errors/errorNotFound";

class CustomersService {
	async getAll() {
		return await Customers.findAll();
	}

	async findOne(id: string) {
		const data = await Customers.findByPk(id);
		if (data) {
			return data;
		} else {
			throw new ErrorNotFound();
		}
	}

	async create(dto: CustomersAttributes) {
		return await Customers.create(dto);
	}

	async update(dto: CustomerInput, id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await Customers.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async delete(id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await Customers.destroy({ where: { id } });
		} else {
			throw new ErrorNotFound();
		}
	}
}

export default CustomersService;
