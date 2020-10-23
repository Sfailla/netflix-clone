import React from 'react';
import { SignUp } from '../components';
import useForm from '../hooks/useForm';
import validateForm from '../utils/validation/validateForm';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../firebase';

const INITIAL_STATE = {
	email: ''
};

export default function SignUpContainer() {
	const { handleChange, handleSubmit, values, errors } = useForm(
		INITIAL_STATE,
		validateForm,
		authenticate
	);
	const history = useHistory();
	const { register, setRegister } = React.useContext(FirebaseContext);

	const { email } = values;
	console.log(register);

	function authenticate() {
		setRegister(email);
		history.push(ROUTES.SIGN_IN);
	}

	return (
		<SignUp>
			<SignUp.Text>
				Ready to watch? Enter your email to create or restart your membership
			</SignUp.Text>
			<SignUp.Wrapper>
				<SignUp.Form onSubmit={handleSubmit}>
					<SignUp.FormGroup>
						<SignUp.Input
							type="text"
							placeholder=" "
							name="email"
							value={email}
							onChange={handleChange}
						/>
						<SignUp.Label>Email address</SignUp.Label>
						{errors.email ? <SignUp.Error>{errors.email}</SignUp.Error> : null}
					</SignUp.FormGroup>
					<SignUp.Button type="submit">
						get started
						<SignUp.Svg
							viewBox="0 0 30 30"
							d="M19.875 15l-10.711-11.13c-0.402-0.405-0.402-1.060 0-1.469 0.402-0.405 1.051-0.405 1.454 0l11.745 11.862c0.402 0.406 0.402 1.064 0 1.469l-11.745 11.862c-0.402 0.406-1.051 0.405-1.454 0-0.402-0.404-0.402-1.060 0-1.469l10.711-11.125z"
						/>
					</SignUp.Button>
				</SignUp.Form>
			</SignUp.Wrapper>
		</SignUp>
	);
}
