import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function LoginUser(props) {
	const initialUserState = {
		username: '',
		password: '',
	};
	const [userLogin, setUserLogin] = useState({ username: '', password: '' });
	const [error, setError] = useState();

	const handleInputChange = (e) => {
		setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
		console.log(userLogin);
	};

	const clear = () => {
		setUserLogin(initialUserState);
	};

	const submitLoginCredentials = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/auth/login', userLogin)
			.then((res) => {
				clear();
				props.setLoggedIn(true);
				console.log('after login', res.data);
			})
			.catch((err) => {
				const errorMessage = err.response.data;
				setError(errorMessage);
			});
	};

	return (
		<form onSubmit={submitLoginCredentials}>
			<input
				type="text"
				name="username"
				placeholder="Username"
				value={userLogin.username}
				onChange={handleInputChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={userLogin.password}
				onChange={handleInputChange}
			/>
			<button onClick={props.getUsers}>LogIn</button>{' '}
			{error ? (
				<span>
					{error.message}.<Link to="/register">Create account</Link>
				</span>
			) : (
				<span>
					<Link to="/register">Create account</Link>
				</span>
			)}
		</form>
	);
}
export default LoginUser;
