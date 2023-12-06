import Books from "./Books";
import Categories from "./Categories";
import Customers from "./Customers";
import PublishingCompanies from "./PublishingCompanies";
import Orders from "./Orders";

export const associations = () => {
	Books.belongsTo(Categories, {
		foreignKey: "category_id",
	});
	Categories.hasOne(Books, {
		foreignKey: "id",
	});

	Books.belongsTo(PublishingCompanies, {
		foreignKey: "publishingCompany_id",
	});
	PublishingCompanies.hasOne(Books, {
		foreignKey: "id",
	});

	Orders.belongsTo(Customers, {
		foreignKey: "customer_id",
	});
	Customers.hasOne(Orders, {
		foreignKey: "id",
	});
};
