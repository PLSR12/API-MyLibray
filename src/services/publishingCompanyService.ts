import {
	PublishingCompaniesAttributes,
	PublishingCompanyInput,
} from "types/PublishingCompanies";
import PublishingCompanies from "../db/models/PublishingCompanies";
import ErrorNotFound from "../errors/errorNotFound";

class PublishingCompaniesService {
	async getAll() {
		return await PublishingCompanies.findAll();
	}

	async findOne(id: string) {
		const data = await PublishingCompanies.findByPk(id);
		if (data) {
			return data;
		} else {
			throw new ErrorNotFound();
		}
	}

	async create(dto: PublishingCompaniesAttributes) {
		return await PublishingCompanies.create(dto);
	}

	async update(dto: PublishingCompanyInput, id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await PublishingCompanies.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async delete(id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await PublishingCompanies.destroy({ where: { id } });
		} else {
			throw new ErrorNotFound();
		}
	}
}

export default PublishingCompaniesService;
