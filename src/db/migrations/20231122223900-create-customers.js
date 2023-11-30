"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Customers", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			name: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			telephone: {
				type: Sequelize.STRING(14),
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			cpf: {
				type: Sequelize.STRING(15),
				allowNull: false,
			},
			cep: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			address: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			city: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			district: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			state: {
				type: Sequelize.STRING(100),
				allowNull: false,
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
		await queryInterface.dropTable("Customers");
	},
};
