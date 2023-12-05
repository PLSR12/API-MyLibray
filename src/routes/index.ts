import { Application } from "express";
import bodyParser from "body-parser";
import auth from "./authRoutes";
import customers from "./customersRoutes";
import categories from "./categoriesRoutes";
import publishingCompanies from "./publishingCompanies";

export default (app: Application) => {
	app.use(bodyParser.json(), auth, customers, categories, publishingCompanies);
};
