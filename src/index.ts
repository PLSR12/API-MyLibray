import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { associations } from "./db/models/associations";
import { resolve } from "path";

dotenv.config();

const app = express();
app.use(routes);
app.use("/category-file", express.static(resolve(__dirname, "..", "uploads")));

associations();

app.listen(process.env.APP_PORT, () => {
	console.log(
		`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`
	);
});

export default app;
