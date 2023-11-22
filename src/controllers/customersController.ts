import { Request, Response } from "express";
import Helper from "../helpers/responseData";
import CustomersService from "../services/customersService";

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
}

export default CustomersController;
