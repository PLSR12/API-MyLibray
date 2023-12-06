import { NextFunction, Request, Response } from "express";
import Helper from "../../helpers/responseData";
import OrdersService from "../../services/ordersService";
import { v4 } from "uuid";

const ordersService = new OrdersService();

class OrdersController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const allCustomers = await ordersService.getAll();
			return res
				.status(200)
				.send(Helper.ResponseData(201, null, null, allCustomers));
		} catch (error) {
			next(error);
		}
	}

	static async getOne(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const order = await ordersService.findOne(id);
			return res.status(200).send(Helper.ResponseData(200, null, null, order));
		} catch (error) {
			next(error);
		}
	}

	static async getByCustomer(req: Request, res: Response, next: NextFunction) {
		const { customerId } = req.params;

		try {
			const order = await ordersService.findByCustomer(customerId);
			return res.status(200).send(Helper.ResponseData(200, null, null, order));
		} catch (error) {
			next(error);
		}
	}
	static async create(req: Request, res: Response, next: NextFunction) {
		const id = v4();

		try {
			const orderCreated = await ordersService.create({
				id,
				date: Date.now(),
				...req.body,
			});
			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, orderCreated));
		} catch (error) {
			next(error);
		}
	}
	static async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await ordersService.update(
				{
					id,
					date: Date.now(),
					...req.body,
				},
				id
			);

			const orderUpdated = await ordersService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, orderUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await ordersService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			next(error);
		}
	}
}

export default OrdersController;
