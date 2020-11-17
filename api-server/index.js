const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const dbConnect = process.env.DB_CONNECT;

// Routes
const authRoute = require("./routes/auth");

// Connect to DB
mongoose.connect(
	dbConnect,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("connected to db");
	}
);

// Middleware
app.use(express.json());

// Routes Middlewares
app.use("/api/user", authRoute);

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to OnePlace!",
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
