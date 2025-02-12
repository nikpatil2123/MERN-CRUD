import dotenv from "dotenv";
import express from 'express';
import bodyparser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';
dotenv.config();

import route from "./routes/userroute.js";

const app = express();
const port = process.env.PORT || 10000; // Default port for Render
const url = process.env.MONGOOSE_URL;

// Updated CORS configuration with Render URL
app.use(cors({
	origin: ["https://mern-crud-drab.vercel.app", "https://mern-crud-1huy.onrender.com"],
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true
}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Add headers for additional security including Render URL
app.use((req, res, next) => {
	const allowedOrigins = ['https://mern-crud-drab.vercel.app', 'https://mern-crud-1huy.onrender.com'];
	const origin = req.headers.origin;

	if (allowedOrigins.includes(origin)) {
		res.header('Access-Control-Allow-Origin', origin);
	}

	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
		return res.status(200).json({});
	}
	next();
});

// Basic health check endpoint
app.get('/health', (req, res) => {
	res.status(200).json({ status: 'Server is running' });
});

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		app.listen(port, '0.0.0.0', () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((err) => console.error("Connection Failed", err));

app.use('/api', route);
