import { NextFunction, Request, Response } from "express";
import Helper from "../../helpers/responseData";
import CustomersService from "../../services/customersService";
import { v4 } from "uuid";
import { hash } from "bcryptjs";

const customersService = new CustomersService();

class CustomersController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const allCustomers = await customersService.getAll();
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
			const customer = await customersService.findOne(id);
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, customer));
		} catch (error) {
			next(error);
		}
	}

	static async create(req: Request, res: Response, next: NextFunction) {
		try {
			const id = v4();
			const passwordHash = await hash(req.body.password, 8);

			const customerCreated = await customersService.create({
				id,
				...req.body,
				password: passwordHash,
			});
			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, customerCreated));
		} catch (error) {
			next(error);
		}
	}

	static async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await customersService.update(req.body, id);

			const customerUpdated = await customersService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, customerUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await customersService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			next(error);
		}
	}
}

export default CustomersController;
