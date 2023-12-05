import validateRoute from "../middlewares/validateRoute";
import CustomersController from "../controllers/customers/customersController";
import { Router } from "express";
import { customersSchema } from "../controllers/customers/schema";
const router = Router();

router.get("/customers", CustomersController.getAll);
router.get("/customers/:id", CustomersController.getOne);
router.delete("/customers/:id", CustomersController.delete);
router.post(
	"/customers",
	validateRoute(customersSchema),
	CustomersController.create
);
router.put(
	"/customers/:id",
	validateRoute(customersSchema),
	CustomersController.update
);

export default router;
