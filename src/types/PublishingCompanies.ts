export interface PublishingCompaniesAttributes {
	id: string;
	name: string;
	description: string;
	image: string;
}

export interface PublishingCompanyInput
	extends Omit<PublishingCompaniesAttributes, "id"> {}
export interface PublishingCompanyOutput
	extends Required<PublishingCompaniesAttributes> {}
