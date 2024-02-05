"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("orders", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			date: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			status: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			customer_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: "customers",
					key: "id",
				},
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
		await queryInterface.dropTable("orders");
	},
};
