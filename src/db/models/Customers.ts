import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";
import { CustomerInput, CustomersAttributes } from "types/Customers";

class Customers
	extends Model<CustomersAttributes, CustomerInput>
	implements CustomersAttributes
{
	public id!: string;
	public name!: string;
	public password!: string;
	public telephone!: string;
	public email!: string;
	public cpf!: string;
	public cep!: string;
	public address!: string;
	public city!: string;
	public district!: string;
	public state!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}
Customers.init(
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
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		telephone: {
			type: DataTypes.STRING(14),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		cpf: {
			type: DataTypes.STRING(15),
			allowNull: false,
		},
		cep: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		district: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		state: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
	},

	{
		timestamps: true,
		sequelize: connection,
		underscored: false,
		modelName: "customers",
	}
);

export default Customers;
