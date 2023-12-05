import * as yup from "yup";

export const categoriesSchema = yup.object().shape({
	name: yup.string().required(),
	description: yup.string().required(),
});
