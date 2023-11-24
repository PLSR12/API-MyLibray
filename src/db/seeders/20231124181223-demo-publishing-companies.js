"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"PublishingCompanies",
			[
				{
					id: "73a5b1d8-5b01-476c-b242-e9cbc32f14bc",
					name: "Terra Brasil",
					description: "A editora com maior número de livros publicados",
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
		await queryInterface.bulkDelete("PublishingCompanies", null, {});
	},
};
