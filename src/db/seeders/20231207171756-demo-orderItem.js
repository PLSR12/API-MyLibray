"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"orderItems",
			[
				{
					id: "7eb11238-3556-4d84-b12c-e77114fec4e5",
					order_id: "d45cbfbe-9231-4822-afb6-6675786ffa6f",
					book_id: "c61cbfbe-9231-4822-afb6-6675786ffa6e",
					quantity: 1,
					price: 150,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("orderItems", null, {});
	},
};
