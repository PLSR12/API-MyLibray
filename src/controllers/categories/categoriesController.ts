import { NextFunction, Request, Response } from "express";
import Helper from "../../helpers/responseData";
import CategoriesService from "../../services/categoriesService";
import { v4 } from "uuid";

const categoriesService = new CategoriesService();

class CategoriesController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const allCategories = await categoriesService.getAll();
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, allCategories));
		} catch (error) {
			next(error);
		}
	}

	static async getOne(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const oneCategory = await categoriesService.findOne(id);
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, oneCategory));
		} catch (error) {
			next(error);
		}
	}

	static async create(req: Request, res: Response, next: NextFunction) {
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
			next(error);
		}
	}

	static async update(req: Request, res: Response, next: NextFunction) {
		const { filename: path }: any = req.file;
		const { name, description } = req.body;
		const { id } = req.params;
		try {
			await categoriesService.update(
				{
					image: path,
					name,
					description,
				},
				id
			);
			const categoryUpdated = await categoriesService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, categoryUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await categoriesService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			next(error);
		}
	}
}

export default CategoriesController;
