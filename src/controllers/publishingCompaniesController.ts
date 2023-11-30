import { Request, Response } from "express";
import Helper from "../helpers/responseData";
import PublishingCompaniesService from "../services/publishingCompanyService";
import { v4 } from "uuid";

const publishingCompaniesService = new PublishingCompaniesService();

class PublishingCompaniesController {
	static async getAll(req: Request, res: Response): Promise<Response> {
		try {
			const allPublishingCompanies = await publishingCompaniesService.getAll();
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, allPublishingCompanies));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}

	static async getOne(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;

		try {
			const onePublishingCompany = await publishingCompaniesService.findOne(id);
			if (onePublishingCompany) {
				return res
					.status(200)
					.send(Helper.ResponseData(200, null, null, onePublishingCompany));
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
			const publishingCompanyCreated = await publishingCompaniesService.create({
				id,
				image: path,
				name,
				description,
			});
			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, publishingCompanyCreated));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}

	static async update(req: Request, res: Response): Promise<Response> {
		const { filename: path }: any = req.file;
		const { name, description } = req.body;
		const { id } = req.params;
		try {
			const publishingCompanyForUpdate =
				await publishingCompaniesService.findOne(id);

			if (publishingCompanyForUpdate) {
				await publishingCompaniesService.update(
					{
						image: path,
						name,
						description,
					},
					id
				);

				const publishingCompanyUpdated =
					await publishingCompaniesService.findOne(id);

				return res
					.status(200)
					.send(Helper.ResponseData(200, null, null, publishingCompanyUpdated));
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
			await publishingCompaniesService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, null, null, null));
		}
	}
}

export default PublishingCompaniesController;
