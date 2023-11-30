import { Request, Response } from "express";
import Helper from "../helpers/responseData";
import CustomersService from "../services/customersService";
import { v4 } from "uuid";
import { hash } from "bcryptjs";

const customersService = new CustomersService();

class CustomersController {
	static async getAll(req: Request, res: Response): Promise<Response> {
		try {
			const allCustomers = await customersService.getAll();
			return res
				.status(200)
				.send(Helper.ResponseData(201, null, null, allCustomers));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}

	static async getOne(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;

		try {
			const oneCustomer = await customersService.findOne(id);
			if (oneCustomer) {
				return res
					.status(200)
					.send(Helper.ResponseData(200, null, null, { ...oneCustomer }));
			}
			return res
				.status(404)
				.send(Helper.ResponseData(404, "Not Found", null, null));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}

	// USAR SERVICE COM LOGICA E VALIDAÇÕES , CONTROLLER APENAS PARA

	static async create(req: Request, res: Response): Promise<Response> {
		try {
			const id = v4();

			//	 IMPLEMENTAR CONVERSÃO DE PASSWORD PARA HASH, E ADICIONAR ESTRUTURA DE AUTH
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
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}

	static async update(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;

		try {
			const customerForUpdate = await customersService.findOne(id);

			if (customerForUpdate) {
				await customersService.update(req.body, id);

				const customerUpdated = await customersService.findOne(id);

				return res
					.status(200)
					.send(Helper.ResponseData(200, null, null, customerUpdated));
			}
			return res
				.status(404)
				.send(Helper.ResponseData(404, "Not Found", null, null));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}

	static async delete(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;

		try {
			await customersService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, null, null, null));
		}
	}
}

export default CustomersController;
