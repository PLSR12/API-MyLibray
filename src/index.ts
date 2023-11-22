import express from "express";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();
app.use(routes);

app.listen(process.env.APP_PORT, () => {
	console.log(
		`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`
	);
});

export default app;
