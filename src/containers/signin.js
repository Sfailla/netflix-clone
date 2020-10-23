import React from 'react';
import { SignIn } from '../components';
import { FirebaseContext } from '../firebase';
import useForm from '../hooks/useForm';
import validateForm from '../utils/validation/validateForm';

const INITIAL_STATE = {
	email: '',
	password: ''
};

export default function SignInContainer() {
	const { handleChange, handleSubmit, isSubmitting, errors, values } = useForm(
		INITIAL_STATE,
		validateForm
	);
	const { register } = React.useContext(FirebaseContext);
	let { email, password } = values;

	if (register) {
		email = register;
	}

	function authenticateUser() {}

	return (
		<SignIn>
			<SignIn.Card>
				<SignIn.Wrapper>
					<SignIn.Title>{!!register ? 'Sign Up' : 'Sign In'}</SignIn.Title>
					<SignIn.Form onSubmit={handleSubmit}>
						<SignIn.FormGroup>
							<SignIn.LabelAnimationWrapper>
								<SignIn.Input
									type="text"
									name="email"
									value={email}
									placeholder=" "
									onChange={handleChange}
								/>
								<SignIn.Label>Email or phone number</SignIn.Label>
							</SignIn.LabelAnimationWrapper>
							{errors.email ? (
								<SignIn.Error>{errors.email}</SignIn.Error>
							) : (
								<SignIn.Error>
									please enter a valid email or phone number
								</SignIn.Error>
							)}
						</SignIn.FormGroup>
						<SignIn.FormGroup>
							<SignIn.LabelAnimationWrapper>
								<SignIn.Input
									type="text"
									name="password"
									value={password}
									placeholder=" "
									onChange={handleChange}
								/>
								<SignIn.Label>Password</SignIn.Label>
							</SignIn.LabelAnimationWrapper>
							{errors.password ? (
								<SignIn.Error>{errors.password}</SignIn.Error>
							) : (
								<SignIn.Error>
									password must be between 4 and 60 characters
								</SignIn.Error>
							)}
						</SignIn.FormGroup>
						<SignIn.Button type="submit" disabled={isSubmitting}>
							{!!register ? 'Sign Up' : 'Sign In'}
						</SignIn.Button>
					</SignIn.Form>
				</SignIn.Wrapper>
			</SignIn.Card>
		</SignIn>
	);
}
