import { OrderInput } from "types/Orders";
import Customers from "../db/models/Customers";
import Orders from "../db/models/Orders";
import ErrorNotFound from "../errors/errorNotFound";
import OrderItemsService from "./orderItemsService";
import { v4 } from "uuid";
import {
	OrderItemsAttributesWithBooks,
	BookForOrderItem,
} from "types/OrderItem";
const orderItemsService = new OrderItemsService();

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
		const itemsOrder: OrderItemsAttributesWithBooks[] =
			await orderItemsService.getByOrderId(id);
		const data = await Orders.findByPk(id);
		const books: BookForOrderItem[] = itemsOrder.map((item) => {
			return {
				title: item.book.title,
				price: item.price,
				quantity: item.quantity,
				image: item.book.image,
				ISBN: item.book.ISBN,
			};
		});

		if (data) {
			const finalData = { ...data.dataValues, books: [...books] };

			return finalData;
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

	async create(dto: OrderInput) {
		const orderCreated = await Orders.create(dto);

		// caso a quantidade não esteja disponivel, roll back usando transaction.
		dto.books.map((book) => {
			const id = v4();
			// validar quantidade de livros
			orderItemsService.create({
				id: id,
				quantity: book.quantity,
				book_id: book.id,
				order_id: orderCreated.id,
				price: book.price,
			});
		});

		return orderCreated;
	}

	async update(dto: { status: number }, id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await Orders.update(
				{ ...dto, status: dto.status },
				{ where: { id: id } }
			);
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
