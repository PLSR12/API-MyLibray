import {
	PublishingCompaniesAttributes,
	PublishingCompanyInput,
} from "types/PublishingCompanies";
import PublishingCompanies from "../db/models/PublishingCompanies";

class PublishingCompaniesService {
	async getAll() {
		return await PublishingCompanies.findAll();
	}

	async create(dto: PublishingCompaniesAttributes) {
		return await PublishingCompanies.create(dto);
	}
	async update(dto: PublishingCompanyInput, id: string) {
		return await PublishingCompanies.update(dto, { where: { id: id } });
	}
	async findOne(id: string) {
		return await PublishingCompanies.findByPk(id);
	}
	async delete(id: string) {
		return await PublishingCompanies.destroy({ where: { id } });
	}
}

export default PublishingCompaniesService;
