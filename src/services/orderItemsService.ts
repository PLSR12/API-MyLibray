import { OrderItemInput } from "../types/OrderItem";
import Books from "../db/models/Books";
import OrderItem from "../db/models/OrderItem";
import Orders from "../db/models/Orders";
import { Sequelize } from "sequelize";

class OrderItemsService {
	async getAll() {
		return await OrderItem.findAll();
	}
	async getByOrderId(orderId: string) {
		const allItems: any = await OrderItem.findAll({
			where: { order_id: orderId },
			include: [{ model: Books, attributes: ["title", "image", "ISBN"] }],
		});

		return allItems;
	}

	async create(dto: OrderItemInput) {
		return await OrderItem.create(dto);
	}

	async getBookSales(bookId: string) {
		const bookSales: any = await OrderItem.sum("quantity", {
			where: { book_id: bookId },
		});
		return bookSales;
	}
}

export default OrderItemsService;
