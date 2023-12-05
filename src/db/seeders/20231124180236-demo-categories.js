"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"categories",
			[
				{
					id: "b3090b40-0401-4ec3-8170-499d083a565d",
					name: "Terror",
					description: "Livros de terrorists",
					image:
						"https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("categories", null, {});
	},
};
