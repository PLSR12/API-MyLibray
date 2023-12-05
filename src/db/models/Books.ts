import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import { IBook, IBookInput } from "types/Books";

class Books extends Model<IBook, IBookInput> implements IBook {
	public id!: string;
	public title!: string;
	public category_id!: string;
	public ISBN!: string;
	public publishYear!: number;
	public publishingCompany_id!: string;
	public price!: number;
	public quantity!: number;
	public image!: string;
	public description!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

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
		category_id: {
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
		publishingCompany_id: {
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
		modelName: "books",
	}
);

export default Books;
