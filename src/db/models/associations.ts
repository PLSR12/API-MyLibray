import Books from "./Books";
import Categories from "./Categories";

export const associations = () => {
	Books.belongsTo(Categories);
	// Categories.belongsTo(Books);
};
