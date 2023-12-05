import { CategoriesAttributes, CategoryInput } from "types/Categories";
import Categories from "../db/models/Categories";
import ErrorNotFound from "../errors/errorNotFound";

class CategoriesService {
	async getAll() {
		return await Categories.findAll();
	}

	async findOne(id: string) {
		const data = await Categories.findByPk(id);
		if (data) {
			return data;
		} else {
			throw new ErrorNotFound();
		}
	}

	async create(dto: CategoriesAttributes) {
		return await Categories.create(dto);
	}

	async update(dto: CategoryInput, id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await Categories.update(dto, { where: { id: id } });
		} else {
			throw new ErrorNotFound();
		}
	}

	async delete(id: string) {
		const data = await this.findOne(id);
		if (data) {
			return await Categories.destroy({ where: { id } });
		} else {
			throw new ErrorNotFound();
		}
	}
}

export default CategoriesService;
