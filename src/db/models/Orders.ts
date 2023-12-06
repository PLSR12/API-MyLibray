import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import { OrdersAttributes, OrderInput } from "types/Orders";

class Orders
	extends Model<OrdersAttributes, OrderInput>
	implements OrdersAttributes
{
	public id!: string;
	public date!: Date;
	public status!: number;
	public customer_id!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Orders.init(
	{
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		customer_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
	},

	{
		timestamps: true,
		sequelize: connection,
		underscored: false,
		modelName: "orders",
	}
);

export default Orders;
