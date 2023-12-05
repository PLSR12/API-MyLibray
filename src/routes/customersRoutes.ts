import validateRoute from "../middlewares/validateRoute";
import CustomersController from "../controllers/customers/customersController";
import { Router } from "express";
import { CustomersValidation } from "../controllers/customers/schema";
const router = Router();

router.get("/customers", CustomersController.getAll);
router.get("/customers/:id", CustomersController.getOne);
router.delete("/customers/:id", CustomersController.delete);
router.post(
	"/customers",
	validateRoute(CustomersValidation.createSchema),
	CustomersController.create
);
router.put(
	"/customers/:id",
	validateRoute(CustomersValidation.updateSchema),
	CustomersController.update
);

export default router;
