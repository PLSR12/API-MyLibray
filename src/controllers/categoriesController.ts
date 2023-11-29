import { Request, Response } from "express";
import Helper from "../helpers/responseData";
import CategoriesService from "../services/categoriesService";
import { v4 } from "uuid";

const categoriesService = new CategoriesService();

class CategoriesController {
	static async getAll(req: Request, res: Response): Promise<Response> {
		try {
			const allCategories = await categoriesService.getAll();
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, allCategories));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}

	static async getOne(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;

		try {
			const oneCategory = await categoriesService.findOne(id);
			if (oneCategory) {
				return res
					.status(200)
					.send(Helper.ResponseData(200, null, null, oneCategory));
			}
			return res
				.status(404)
				.send(Helper.ResponseData(404, "Not Found", null, null));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}

	static async create(req: Request, res: Response): Promise<Response> {
		const { filename: path }: any = req.file;
		const { name, description } = req.body;
		const id = v4();
		try {
			const categoryCreated = await categoriesService.create({
				id,
				image: path,
				name,
				description,
			});
			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, categoryCreated));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}

	static async update(req: Request, res: Response): Promise<Response> {
		const { filename: path }: any = req.file;
		const { name, description } = req.body;
		const { id } = req.params;
		try {
			const categoryUpdate = await categoriesService.findOne(id);

			if (categoryUpdate) {
				await categoriesService.update(
					{
						image: path,
						name,
						description,
					},
					id
				);

				return res
					.status(200)
					.send(Helper.ResponseData(200, null, null, categoryUpdate));
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
			await categoriesService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, null, null, null));
		}
	}
}

export default CategoriesController;
