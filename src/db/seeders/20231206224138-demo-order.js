"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"orders",
			[
				{
					id: "d45cbfbe-9231-4822-afb6-6675786ffa6f",
					customer_id: "b3090b70-0401-4ec3-8170-499d083a565d",
					status: 0,
					date: new Date(),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("orders", null, {});
	},
};
