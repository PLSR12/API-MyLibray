import * as yup from "yup";

export const categoriesSchema = yup.object().shape({
	name: yup.string().required(),
	description: yup.string().required(),
});

export namespace CategoriesValidation {
	export const createSchema = yup.object().shape({ body: categoriesSchema });
	export const updateSchema = yup.object().shape({
		body: categoriesSchema,
		params: yup.object().shape({
			id: yup.string().required(),
		}),
	});
}
