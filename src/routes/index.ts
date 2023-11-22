import { Router } from "express";
import CustomersController from "../controllers/customersController";

const routes = Router();

routes.get("/customers", CustomersController.getAll);

export default routes;
