import { Request, Response, NextFunction } from "express";
import Helper from "../../helpers/responseData";
import PublishingCompaniesService from "../../services/publishingCompanyService";
import { v4 } from "uuid";

const { BASEURL } = process.env;
const publishingCompaniesService = new PublishingCompaniesService();

class PublishingCompaniesController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const allPublishingCompanies = await publishingCompaniesService.getAll();
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, allPublishingCompanies));
		} catch (error) {
			next(error);
		}
	}

	static async getOne(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const onePublishingCompany = await publishingCompaniesService.findOne(id);
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, onePublishingCompany));
		} catch (error) {
			next(error);
		}
	}

	static async create(req: Request, res: Response, next: NextFunction) {
		const { filename: path }: any = req.file;
		const { name, description } = req.body;
		const id = v4();

		try {
			const publishingCompanyCreated = await publishingCompaniesService.create({
				id,
				image: `${BASEURL}/publishing-company-file/${path}`,
				name,
				description,
			});
			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, publishingCompanyCreated));
		} catch (error) {
			next(error);
		}
	}

	static async update(req: Request, res: Response, next: NextFunction) {
		const { filename: path }: any = req.file;
		const { name, description } = req.body;
		const { id } = req.params;

		try {
			await publishingCompaniesService.update(
				{
					image: `${BASEURL}/publishing-company-file/${path}`,
					name,
					description,
				},
				id
			);

			const publishingCompanyUpdated = await publishingCompaniesService.findOne(
				id
			);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, publishingCompanyUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await publishingCompaniesService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			next(error);
		}
	}
}

export default PublishingCompaniesController;
