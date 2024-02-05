import { Application } from "express";
import bodyParser from "body-parser";
import auth from "./authRoutes";
import customers from "./customersRoutes";
import categories from "./categoriesRoutes";
import publishingCompanies from "./publishingCompanies";
import books from "./booksRoutes";
import orders from "./ordersRoute";

export default (app: Application) => {
	app.use(
		bodyParser.json(),
		auth,
		customers,
		categories,
		publishingCompanies,
		books,
		orders
	);
};
