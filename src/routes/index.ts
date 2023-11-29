import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";
import CustomersController from "../controllers/customersController";
import CategoriesController from "../controllers/categoriesController";

const routes = Router();
const upload = multer(multerConfig);

routes.get("/customers", CustomersController.getAll);

routes.get("/categories", CategoriesController.getAll);
routes.get("/categories/:id", CategoriesController.getOne);
routes.delete("/categories/:id", CategoriesController.delete);
routes.post("/categories", upload.single("file"), CategoriesController.create);
routes.put(
	"/categories/:id",
	upload.single("file"),
	CategoriesController.update
);

export default routes;
