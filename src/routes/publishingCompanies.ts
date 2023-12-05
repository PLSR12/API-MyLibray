import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";
import PublishingCompaniesController from "../controllers/publishingCompanies/publishingCompaniesController";
import validateRoute from "../middlewares/validateRoute";
import { publishinhgCompaniesSchema } from "../controllers/publishingCompanies/schema";
const router = Router();

const upload = multer(multerConfig);

router.get("/publishingCompanies", PublishingCompaniesController.getAll);
router.get("/publishingCompanies/:id", PublishingCompaniesController.getOne);
router.delete("/publishingCompanies/:id", PublishingCompaniesController.delete);
router.post(
	"/publishingCompanies",
	upload.single("file"),
	validateRoute(publishinhgCompaniesSchema),
	PublishingCompaniesController.create
);
router.put(
	"/publishingCompanies/:id",
	upload.single("file"),
	validateRoute(publishinhgCompaniesSchema),
	PublishingCompaniesController.update
);

export default router;
