"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"customers",
			[
				{
					id: "b3090b70-0401-4ec3-8170-499d083a565d",
					name: "José ",
					password: "6f53f4ae-bc12-4890-ab42-70b0d3ebad17",
					telephone: "Telefone",
					email: "jose@gmail.com",
					cpf: "123.456.789-01",
					cep: "24900-367",
					address: "Rua José Garcia, 36 ",
					city: "Maricá",
					district: "Barroco",
					state: "Rio de Janeiro",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("customers", null, {});
	},
};
