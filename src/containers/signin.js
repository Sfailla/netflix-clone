import React from 'react';
import { useHistory } from 'react-router-dom';
import { SignIn } from '../components';
import { FirebaseContext } from '../firebase';
import useForm from '../hooks/useForm';
import validateForm from '../utils/validation/validateForm';
import * as ROUTES from '../constants/routes';

export default function SignInContainer() {
	const { register, firebase } = React.useContext(FirebaseContext);
	const { handleChange, handleSubmit, isSubmitting, values, errors } = useForm(
		{ email: register ? register : '', name: '', password: '' },
		validateForm,
		authenticateUser
	);
	const history = useHistory();
	const [ firebaseError, setFirebaseError ] = React.useState(null);
	let { email, name, password } = values;

	console.log(values);
	function authenticateUser() {
		!!register
			? firebase
					.register(email, name, password)
					.then(() => history.push(ROUTES.BROWSE))
					.catch(error => setFirebaseError(error.message))
			: firebase
					.login(email, password)
					.then(() => history.push(ROUTES.BROWSE))
					.catch(error => setFirebaseError(error.message));
	}

	return (
		<SignIn>
			<SignIn.Card>
				<SignIn.Wrapper>
					<SignIn.Title>{!!register ? 'Sign Up' : 'Sign In'}</SignIn.Title>
					{!!register && (
						<SignIn.Message color={'#8c8c8c'}>
							Almost there! please provide a username and password to finish the
							registration process
						</SignIn.Message>
					)}
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
						{!!register && (
							<SignIn.FormGroup>
								<SignIn.LabelAnimationWrapper>
									<SignIn.Input
										type="text"
										name="name"
										value={name}
										placeholder=" "
										onChange={handleChange}
									/>
									<SignIn.Label>Username</SignIn.Label>
								</SignIn.LabelAnimationWrapper>
								{errors.name ? (
									<SignIn.Error>{errors.name}</SignIn.Error>
								) : (
									<SignIn.Error>please enter a username</SignIn.Error>
								)}
							</SignIn.FormGroup>
						)}
						<SignIn.FormGroup>
							<SignIn.LabelAnimationWrapper>
								<SignIn.Input
									type="password"
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
							{firebaseError && <SignIn.Error>{firebaseError}</SignIn.Error>}
						</SignIn.FormGroup>
						<SignIn.Button type="submit" disabled={isSubmitting}>
							{!!register ? 'Sign Up' : 'Sign In'}
						</SignIn.Button>
					</SignIn.Form>
					<SignIn.Message fontSize={16} color={'#737373'}>
						New to Netflix?
					</SignIn.Message>
					<SignIn.TextLink to={ROUTES.HOME}>Sign up now</SignIn.TextLink>
					<SignIn.Message fontSize={13} color={'#8c8c8c'}>
						This page is protected by Google <SignIn.Span>reCAPTCHA</SignIn.Span> to
						ensure you're not a bot
					</SignIn.Message>
				</SignIn.Wrapper>
			</SignIn.Card>
		</SignIn>
	);
}
