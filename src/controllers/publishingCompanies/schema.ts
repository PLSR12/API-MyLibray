import * as yup from "yup";

export const publishinhgCompaniesSchema = yup.object().shape({
	name: yup.string().required(),
	description: yup.string().required(),
});
