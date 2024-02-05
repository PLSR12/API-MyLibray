"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("orderItems", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			book_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: "books",
					key: "id",
				},
			},
			order_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: "orders",
					key: "id",
				},
			},
			price: {
				allowNull: false,
				type: Sequelize.FLOAT,
			},
			quantity: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("orderItems");
	},
};
