import { NextFunction, Request, Response } from "express";
import Helper from "../../helpers/responseData";
import BooksService from "../../services/booksService";
import { v4 } from "uuid";

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
}

export default BooksController;
