import { ValidationError } from "yup";
import { NextFunction, Request, Response } from "express";
import Helper from "../helpers/responseData";

export default (schema: any) =>
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			await schema.validateSync(
				{
					body: req.body,
					query: req.query,
					params: req.params,
				},
				{ abortEarly: false }
			);
			next();
		} catch (error) {
			const { name, message, errors } = error as ValidationError;
			res.status(401).send(Helper.ResponseData(401, name, errors, null));
		}
	};
