"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"books",
			[
				{
					id: "c61cbfbe-9231-4822-afb6-6675786ffa6e",
					title: "Melhor livro",
					category_id: "b3090b40-0401-4ec3-8170-499d083a565d",
					ISBN: "9781234567897",
					publishYear: "2013",
					publishingCompany_id: "73a5b1d8-5b01-476c-b242-e9cbc32f14bc",
					price: 150,
					quantity: 10,
					image:
						"https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
					description: "Melhor livro já produzido",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("books", null, {});
	},
};
