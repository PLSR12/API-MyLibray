import Customers from "../db/models/Customers";

class CustomersService {
	async getAll() {
		const allCustomers = await Customers.findAll();
		return allCustomers;
	}
}

export default CustomersService;
