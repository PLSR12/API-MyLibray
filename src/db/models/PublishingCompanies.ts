import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import {
	PublishingCompaniesAttributes,
	PublishingCompanyInput,
} from "types/PublishingCompanies";

class PublishingCompanies
	extends Model<PublishingCompaniesAttributes, PublishingCompanyInput>
	implements PublishingCompaniesAttributes
{
	public id!: string;
	public name!: string;
	public description!: string;
	public image!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}
PublishingCompanies.init(
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
		modelName: "publishingCompanies",
	}
);

export default PublishingCompanies;
