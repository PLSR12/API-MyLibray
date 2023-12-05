import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { associations } from "./db/models/associations";
import { resolve } from "path";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();
routes(app);
app.use(errorHandler);

associations();

app.use("/book-file", express.static(resolve(__dirname, "..", "uploads")));
app.use("/category-file", express.static(resolve(__dirname, "..", "uploads")));
app.use(
	"/publishing-company-file",
	express.static(resolve(__dirname, "..", "uploads"))
);

app.listen(process.env.APP_PORT, () => {
	console.log(
		`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`
	);
});

export default app;
