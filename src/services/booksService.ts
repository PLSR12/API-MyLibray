import { IBook, IBookInput } from "types/Books";
import Books from "../db/models/Books";
import ErrorNotFound from "../errors/errorNotFound";
import Categories from "../db/models/Categories";
import PublishingCompanies from "../db/models/PublishingCompanies";
import ErrorBase from "../errors/errorBase";

class BooksService {
	async getAll() {
		return await Books.findAll({
			include: [
				{
					model: Categories,
					attributes: ["id", "name", "image"],
				},
				{
					model: PublishingCompanies,
					attributes: ["id", "name", "image"],
				},
			],
		});
	}

	async findOne(id: string) {
		const data = await Books.findByPk(id, {
			include: [
				{
					model: Categories,
					attributes: ["id", "name", "image"],
				},
				{
					model: PublishingCompanies,
					attributes: ["id", "name", "image"],
				},
			],
		});
		if (data) {
			return data;
		} else {
			throw new ErrorNotFound();
		}
	}

	async create(dto: IBook) {
		const category = await Categories.findByPk(dto.category_id);
		const publishingCompany = await PublishingCompanies.findByPk(
			dto.publishingCompany_id
		);

		if (!publishingCompany || !category) {
			throw new ErrorBase("Category or PublishingCompany not found");
		}

		return await Books.create(dto);
	}

	async update(dto: IBookInput, id: string) {
		const data = await this.findOne(id);
		const category = await Categories.findByPk(dto.category_id);
		const publishingCompany = await PublishingCompanies.findByPk(
			dto.publishingCompany_id
		);

		if (data) {
			if (!publishingCompany || !category) {
				throw new ErrorBase("Category or PublishingCompany not found");
			}

			return await Books.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async delete(id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await Books.destroy({ where: { id } });
		} else {
			throw new ErrorNotFound();
		}
	}
}

export default BooksService;
