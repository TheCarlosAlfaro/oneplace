const express = require("express");
const app = express();
const SERVER_PORT = 5000;

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to church!",
	});
});

app.listen(SERVER_PORT, () => {
	console.log(`Listening on http://localhost:${SERVER_PORT}`);
});
