import { OrderInput, OrdersAttributes } from "types/Orders";
import Customers from "../db/models/Customers";
import Orders from "../db/models/Orders";
import ErrorNotFound from "../errors/errorNotFound";

class OrdersSerivce {
	async getAll() {
		return await Orders.findAll({
			include: [
				{
					model: Customers,
					attributes: ["name", "telephone", "email"],
				},
			],
		});
	}

	async findOne(id: string) {
		const data = await Orders.findByPk(id);
		if (data) {
			return data;
		} else {
			throw new ErrorNotFound();
		}
	}

	async findByCustomer(id: string) {
		return await Orders.findAll({
			where: { customer_id: id },
			include: [
				{
					model: Customers,
					attributes: [
						"name",
						"telephone",
						"email",
						"cep",
						"address",
						"city",
						"district",
					],
				},
			],
		});
	}

	async create(dto: OrdersAttributes) {
		return await Orders.create(dto);
	}

	async update(dto: OrderInput, id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await Orders.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async delete(id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await Orders.destroy({ where: { id } });
		} else {
			throw new ErrorNotFound();
		}
	}
}

export default OrdersSerivce;
