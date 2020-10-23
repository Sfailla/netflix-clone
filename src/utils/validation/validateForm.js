export default function validateForm(values) {
	let errors = {};

	// Email Errors
	if (values.email === '') {
		errors.email = 'Email is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Invalid Email Address';
	}

	// Password Errors
	if (values.password === '') {
		errors.password = 'Password is required';
	} else if (values.password && values.password.length < 6) {
		errors.password = 'Password must be 6 characters';
	}

	return errors;
}
