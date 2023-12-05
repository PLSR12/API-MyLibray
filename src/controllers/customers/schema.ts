import * as yup from "yup";

const customersSchema = yup.object().shape({
	name: yup.string().required(),
	password: yup.string().required(),
	telephone: yup.string().required(),
	email: yup.string().email().required(),
	cpf: yup.string().required(),
	cep: yup.string().required(),
	address: yup.string().required(),
	city: yup.string().required(),
	district: yup.string().required(),
	state: yup.string().required(),
});

export namespace CustomersValidation {
	export const createSchema = yup.object().shape({ body: customersSchema });
	export const updateSchema = yup.object().shape({
		body: customersSchema,
		params: yup.object().shape({
			id: yup.string().required(),
		}),
	});
}
