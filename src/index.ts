import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", () => console.log("OK"));

app.listen(process.env.APP_PORT, () => {
	console.log(
		`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`
	);
});
