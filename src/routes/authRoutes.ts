import { Router } from "express";
import AuthController from "../controllers/auth/authController";
import { AuthValidation } from "../controllers/auth/schema";
import validateRoute from "../middlewares/validateRoute";
const router = Router();

router.post(
	"/login",
	validateRoute(AuthValidation.schema),
	AuthController.login
);

export default router;
