import { CategoriesAttributes, CategoryInput } from "types/Categories";
import Categories from "../db/models/Categories";

class CategoriesService {
	async getAll() {
		return await Categories.findAll();
	}

	async create(dto: CategoriesAttributes) {
		return await Categories.create(dto);
	}
	async update(dto: CategoryInput, id: string) {
		return await Categories.update(dto, { where: { id: id } });
	}
	async findOne(id: string) {
		return await Categories.findByPk(id);
	}
	async delete(id: string) {
		return await Categories.destroy({ where: { id } });
	}
}

export default CategoriesService;
