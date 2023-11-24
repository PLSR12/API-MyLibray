import Customers from "../db/models/Customers";

class CustomersService {
	async getAll() {
		return await Customers.findAll();
	}
}

export default CustomersService;
