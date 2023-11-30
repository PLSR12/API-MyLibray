import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";
import CustomersController from "../controllers/customersController";
import CategoriesController from "../controllers/categoriesController";
import PublishingCompaniesController from "../controllers/publishingCompaniesController";
import AuthController from "../controllers/authController";

const routes = Router();
const upload = multer(multerConfig);

routes.post("/login", AuthController.login);

routes.get("/customers", CustomersController.getAll);
routes.get("/customers/:id", CustomersController.getOne);
routes.delete("/customers/:id", CustomersController.delete);
routes.post("/customers", CustomersController.create);
routes.put("/customers/:id", CustomersController.update);

routes.get("/categories", CategoriesController.getAll);
routes.get("/categories/:id", CategoriesController.getOne);
routes.delete("/categories/:id", CategoriesController.delete);
routes.post("/categories", upload.single("file"), CategoriesController.create);
routes.put(
	"/categories/:id",
	upload.single("file"),
	CategoriesController.update
);

routes.get("/publishingCompanies", PublishingCompaniesController.getAll);
routes.get("/publishingCompanies/:id", PublishingCompaniesController.getOne);
routes.delete("/publishingCompanies/:id", PublishingCompaniesController.delete);
routes.post(
	"/publishingCompanies",
	upload.single("file"),
	PublishingCompaniesController.create
);
routes.put(
	"/publishingCompanies/:id",
	upload.single("file"),
	PublishingCompaniesController.update
);

export default routes;
