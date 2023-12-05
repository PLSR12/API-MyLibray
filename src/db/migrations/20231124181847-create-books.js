"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("books", {
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
			category_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: "categories",
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
			publishingCompany_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: "publishingCompanies",
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
		await queryInterface.dropTable("books");
	},
};
