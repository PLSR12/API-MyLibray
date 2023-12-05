import BooksController from "../controllers/books/booksController";
import { Router } from "express";
const router = Router();

router.get("/books", BooksController.getAll);
router.get("/books/:id", BooksController.getOne);

export default router;
