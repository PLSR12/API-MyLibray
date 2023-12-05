import { Router } from "express";
import multer from "multer";
import CategoriesController from "../controllers/categories/categoriesController";
import multerConfig from "../config/multer";
import validateRoute from "../middlewares/validateRoute";
import { categoriesSchema } from "../controllers/categories/schema";
const router = Router();

const upload = multer(multerConfig);

router.get("/categories", CategoriesController.getAll);
router.get("/categories/:id", CategoriesController.getOne);
router.delete("/categories/:id", CategoriesController.delete);
router.post(
	"/categories",
	upload.single("file"),
	validateRoute(categoriesSchema),
	CategoriesController.create
);
router.put(
	"/categories/:id",
	upload.single("file"),
	validateRoute(categoriesSchema),
	CategoriesController.update
);

export default router;
