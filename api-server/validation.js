const Joi = require("joi");

// Register validation
function registerValidation(data) {
	const schema = Joi.object({
		name: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	});

	return schema.validate(data);
}

// Login validation
function loginValidation(data) {
	const schema = Joi.object({
		name: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	});

	return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
