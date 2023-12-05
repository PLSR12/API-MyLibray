import { NextFunction, Request, Response } from "express";
import Helper from "../../helpers/responseData";
import BooksService from "../../services/booksService";
import { v4 } from "uuid";

const { BASEURL } = process.env;
const booksService = new BooksService();

class BooksController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const allBooks = await booksService.getAll();
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, allBooks));
		} catch (error) {
			console.log(error);
			next(error);
		}
	}

	static async getOne(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const oneBook = await booksService.findOne(id);
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, oneBook));
		} catch (error) {
			next(error);
		}
	}

	static async create(req: Request, res: Response, next: NextFunction) {
		const { filename: path }: any = req.file;
		const id = v4();
		try {
			const bookCreated = await booksService.create({
				id,
				image: `${BASEURL}/book-file/${path}`,
				...req.body,
			});
			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, bookCreated));
		} catch (error) {
			next(error);
		}
	}

	static async update(req: Request, res: Response, next: NextFunction) {
		const { filename: path }: any = req.file;
		const { id } = req.params;
		try {
			await booksService.update(
				{
					image: `${BASEURL}/book-file/${path}`,
					...req.body,
				},
				id
			);
			const bookUpdated = await booksService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, bookUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await booksService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			next(error);
		}
	}
}

export default BooksController;
