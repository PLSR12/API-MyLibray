import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import { IBook, BookInput } from "types/Books";
import Categories from "./Categories";

class Books extends Model<IBook, BookInput> implements IBook {
	public id!: string;
	public title!: string;
	public category!: string;
	public ISBN!: string;
	public publishYear!: number;
	public publishingCompany!: string;
	public price!: number;
	public quantity!: number;
	public image!: string;
	public description!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}
Books.hasOne(Categories);

Books.init(
	{
		id: {
			allowNull: false,
			type: DataTypes.UUID,
			primaryKey: true,
		},
		title: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		category: {
			type: DataTypes.UUID,
		},
		ISBN: {
			allowNull: false,
			type: DataTypes.STRING(20),
		},
		publishYear: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		publishingCompany: {
			allowNull: false,
			type: DataTypes.UUID,
		},
		price: {
			allowNull: false,
			type: DataTypes.FLOAT,
		},
		quantity: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		image: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		description: {
			allowNull: false,
			type: DataTypes.TEXT,
		},
	},

	{
		timestamps: true,
		sequelize: connection,
		underscored: false,
		modelName: "Books",
	}
);

export default Books;
