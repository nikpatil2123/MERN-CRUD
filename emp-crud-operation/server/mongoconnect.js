import dotenv from "dotenv";
import express from 'express';
import bodyparser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';
dotenv.config();

import route from "./routes/userroute.js";

const app = express();
const port = process.env.PORT || 4000;
const url = process.env.MONGOOSE_URL;

// Updated CORS configuration
app.use(cors({
	origin: ["https://mern-crud-drab.vercel.app"],
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true
}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Add headers for additional security
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'https://mern-crud-1huy.onrender.com');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
		return res.status(200).json({});
	}
	next();
});

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port}`);
		});
	})
	.catch((err) => console.error("Connection Failed", err));

app.use('/api', route);

export default app;
