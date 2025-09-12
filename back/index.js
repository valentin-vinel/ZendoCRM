import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { router } from "./app/routes/router.js";

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
	origin: [
		`http://localhost:3000`
	],
	methods: ["GET", "POST", "PATCH", "DELETE"],
	credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("Welcome to the Zendo CRM API!");
});

// app.use(router);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});