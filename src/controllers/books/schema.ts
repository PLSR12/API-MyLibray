import * as yup from "yup";

export const bookSchema = yup.object().shape({
	title: yup.string().required(),
	category_id: yup.string().required(),
	ISBN: yup
		.string()
		.required()
		.test((value) => value.length === 13),
	publishYear: yup.number().required(),
	publishingCompany_id: yup.string().required(),
	price: yup.number().required(),
	quantity: yup.number().required(),
	description: yup.string().required(),
});
