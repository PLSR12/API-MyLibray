"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Books", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING(100),
			},
			category: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: "Categories",
					key: "id",
				},
			},
			ISBN: {
				allowNull: false,
				type: Sequelize.STRING(20),
			},
			publishYear: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			publishingCompany: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: "PublishingCompanies",
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
			image: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			description: {
				allowNull: false,
				type: Sequelize.TEXT,
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
		await queryInterface.dropTable("Books");
	},
};
