import multer from "multer";
import multerConfig from "../config/multer";
import BooksController from "../controllers/books/booksController";
import { Router } from "express";
import validateRoute from "../middlewares/validateRoute";
import { bookSchema } from "../controllers/books/schema";
const router = Router();

const upload = multer(multerConfig);

router.get("/books", BooksController.getAll);
router.get("/books/:id", BooksController.getOne);
router.post(
	"/books",
	upload.single("file"),
	validateRoute(bookSchema),
	BooksController.create
);
router.put(
	"/books/:id",
	upload.single("file"),
	validateRoute(bookSchema),
	BooksController.update
);
router.delete("/books/:id", BooksController.delete);

export default router;
