import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";
import { CustomersAttributes } from "../../types/Customers";

export interface CustomerInput extends Optional<CustomersAttributes, "id"> {}
export interface CustomerOutput extends Required<CustomersAttributes> {}

class Customers
	extends Model<CustomersAttributes, CustomerInput>
	implements CustomersAttributes
{
	public id!: string;
	public name!: string;
	public password_hash!: string;
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
			type: DataTypes.STRING(36),
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		password_hash: {
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
		modelName: "Customers",
	}
);

export default Customers;
