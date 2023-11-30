import { Request, Response } from "express";
import Helper from "../helpers/responseData";
import AuthService from "../services/authService";

const authService = new AuthService();

class AuthController {
	static async login(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;
		try {
			const login = await authService.login({ email, password });
			return res.status(200).send(Helper.ResponseData(200, null, null, login));
		} catch (error: any) {
			return res.status(500).send(Helper.ResponseData(500, "", error, null));
		}
	}
}

export default AuthController;
