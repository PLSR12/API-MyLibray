import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";
import PublishingCompaniesController from "../controllers/publishingCompanies/publishingCompaniesController";
const router = Router();

const upload = multer(multerConfig);

router.get("/publishingCompanies", PublishingCompaniesController.getAll);
router.get("/publishingCompanies/:id", PublishingCompaniesController.getOne);
router.delete("/publishingCompanies/:id", PublishingCompaniesController.delete);
router.post(
	"/publishingCompanies",
	upload.single("file"),
	PublishingCompaniesController.create
);
router.put(
	"/publishingCompanies/:id",
	upload.single("file"),
	PublishingCompaniesController.update
);

export default router;
