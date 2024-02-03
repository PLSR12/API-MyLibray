const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	development: {
		url: "postgres://library_xldd_user:l3eOdmglPNYo57Ut52z5dqkVXH2vN8kW@dpg-cms2fu0l5elc73erm4j0-a/library_xldd",
		dialect: "postgres",
	},
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: "postgres",
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: "postgres",
	},
};
