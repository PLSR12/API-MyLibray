import * as yup from "yup";

export const ordersSchema = yup.object().shape({
	status: yup.number().required(),
	customer_id: yup
		.string()
		.required()
		.test((value) => value.length === 36),
});
