import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import Customers from "../db/models/Customers";
import ErrorNotFound from "../errors/errorNotFound";
import ErrorBase from "../errors/errorBase";

const secret = process.env.SECRET_AUTH as string;

class AuthService {
	async login(dto: { email: string; password: string }) {
		const customer = await Customers.findOne({
			attributes: ["id", "email", "password"],
			where: {
				email: dto.email,
			},
		});

		if (!customer) {
			throw new ErrorNotFound();
		}

		const passwordEquals = await compare(dto.password, customer.password);

		if (!passwordEquals) {
			throw new ErrorBase("Email or password incorretos");
		}

		const accessToken = sign(
			{ id: customer.id, email: customer.email },
			secret,
			{
				expiresIn: 86400,
			}
		);

		return { accessToken };
	}
}

export default AuthService;
