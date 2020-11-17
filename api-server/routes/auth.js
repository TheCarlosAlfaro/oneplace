const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

// REGISTER
router.post("/register", async (req, res) => {
	// Validate data before creating user
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if user is already in the db
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send("Email already exists");

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	// Create a new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPassword,
	});

	try {
		const savedUser = await user.save();
		res.send({ user: user._id });
	} catch (error) {
		res.status(400).send(error);
	}
});

// LOGIN
router.post("/login", async (req, res) => {
	// Validate data before login
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Checking if the user exists
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Email or password is wrong");

	// Checks is password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send("Invalid password");
	res.send("Logged in!");
});

module.exports = router;