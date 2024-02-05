import { Sequelize } from "sequelize";

import dotenv from "dotenv";
import { associations } from "../db/models/associations";

dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbHost = process.env.DB_HOST;
const dbUsername = process.env.DB_USERNAME as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbDialect = "postgres";

const sequelizeConnection = new Sequelize(dbName, dbUsername, dbPassword, {
	host: dbHost,
	dialect: dbDialect,
	dialectOptions: {
		ssl: true,
	},
});

export default sequelizeConnection;
