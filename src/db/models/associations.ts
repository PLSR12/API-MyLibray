import Books from "./Books";
import Categories from "./Categories";
import PublishingCompanies from "./PublishingCompanies";

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

	// Books.hasOne(PublishingCompanies);
};
