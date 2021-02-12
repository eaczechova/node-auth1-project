import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function RegisterUser() {
	const initialUserState = {
		username: '',
		password: '',
	};
	const [userData, setuserData] = useState({ username: '', password: '' });

	const handleInputChange = (e) => {
		setuserData({ ...userData, [e.target.name]: e.target.value });
		console.log('userData:', userData);
	};

	const clear = () => {
		setuserData(initialUserState);
	};

	const submitRegistrationCredentials = (e) => {
		console.log(userData);
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/auth/register', userData)
			.then(() => {
				clear();
			})
			.catch((err) => {
				const errorMessage = err.response.data;
			});
	};

	return (
		<form onSubmit={submitRegistrationCredentials}>
			<input
				type="text"
				name="username"
				placeholder="Username"
				value={userData.username}
				onChange={handleInputChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={userData.password}
				onChange={handleInputChange}
			/>
			<button>Register</button>{' '}
		</form>
	);
}

export default RegisterUser;
