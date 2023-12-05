import * as yup from "yup";

export const publishinhgCompaniesSchema = yup.object().shape({
	name: yup.string().required(),
	description: yup.string().required(),
});

export namespace PublishinhgCompaniesValidation {
	export const createSchema = yup
		.object()
		.shape({ body: publishinhgCompaniesSchema });
	export const updateSchema = yup.object().shape({
		body: publishinhgCompaniesSchema,
		params: yup.object().shape({
			id: yup.string().required(),
		}),
	});
}
