import React from 'react';
import './Login.scss';
import useToken from '../../Hooks/useToken';
import LoginLogoImg from '../../Assets/Images/loginlogoimg.svg';

function Login() {
	const [, setToken] = useToken();
	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { username, password } = evt.target.elements;

		if (username.value.length > 2 && password.value.length >= 8) {
			setToken({
				username: username.value,
				password: password.value,
			});
		} else {
			alert('username yoki password xato!');
		}
	};

	return (
		<>
			<div className="login">
				<section className="login__section">
					<img
						src={LoginLogoImg}
						alt="loginlogoimg"
						width="50"
						height="41"
					/>
					<h1 className="login__title">Log in to Twitter</h1>
					<form className="login__form" onSubmit={handleSubmit}>
						<input
							className="login__form--username"
							type="text"
							placeholder="Username"
							name="username"
							required
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							className="login__form--password"
							required
						/>
						<button className="login__form--btn" type="submit">
							Log In
						</button>
					</form>
					<span className="login__text">
						<p className="login__text--one">Forgot password?</p>
						<p className="login__text--two">Sign up to Twitter</p>
					</span>
				</section>
			</div>
		</>
	);
}

export default Login;
