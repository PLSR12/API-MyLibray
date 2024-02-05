import validateRoute from "../middlewares/validateRoute";
import OrdersController from "../controllers/orders/ordersController";
import { Router } from "express";
import {
	ordersSchema,
	updtadeOrdersSchema,
} from "../controllers/orders/schema";
const router = Router();

router.get("/orders", OrdersController.getAll);
router.get("/orders/:id", OrdersController.getOne);
router.get("/orders/getByCustomer/:customerId", OrdersController.getByCustomer);
router.post("/orders", validateRoute(ordersSchema), OrdersController.create);
router.put(
	"/orders/:id",
	validateRoute(updtadeOrdersSchema),
	OrdersController.update
);
router.delete("/orders/:id", OrdersController.delete);

export default router;
