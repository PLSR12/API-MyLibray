import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import { CategoriesAttributes, CategoryInput } from "types/Categories";

class Categories
	extends Model<CategoriesAttributes, CategoryInput>
	implements CategoriesAttributes
{
	public id!: string;
	public name!: string;
	public description!: string;
	public image!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Categories.init(
	{
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},

	{
		timestamps: true,
		sequelize: connection,
		underscored: false,
		modelName: "categories",
	}
);

export default Categories;
