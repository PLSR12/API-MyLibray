import { DataTypes, Model } from "sequelize";
import connection from "../../config/dbConnect";
import { OrderItemsAttributes, OrderItemInput } from "types/OrderItem";

class OrderItem
	extends Model<OrderItemsAttributes, OrderItemInput>
	implements OrderItemsAttributes
{
	public id!: string;
	public book_id!: string;
	public order_id!: string;
	public price!: number;
	public quantity!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

OrderItem.init(
	{
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
		},
		book_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		order_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},

	{
		timestamps: true,
		sequelize: connection,
		underscored: false,
		modelName: "orderItem",
	}
);

export default OrderItem;
