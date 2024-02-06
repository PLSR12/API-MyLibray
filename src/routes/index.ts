import { Application, Router } from "express";
import bodyParser from "body-parser";
import auth from "./authRoutes";
import customers from "./customersRoutes";
import categories from "./categoriesRoutes";
import publishingCompanies from "./publishingCompanies";
import books from "./booksRoutes";
import orders from "./ordersRoute";
import authMiddleware from "../middlewares/auth";

export default (app: Application) => {
	const router = Router();
	const middlewareAuth = router.use(authMiddleware);

	app.use(
		bodyParser.json(),
		auth,
		customers,
		middlewareAuth,
		categories,
		publishingCompanies,
		books,
		orders
	);
};
