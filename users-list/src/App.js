import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import LoginUser from './components/LoginUser.js';
import RegisterUser from './components/RegisterUser.js';
import UsersList from './components/UsersList.js';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const [users, setUsers] = useState([]);

	const getUsers = () => {
		axios
			.get('http://localhost:5000/api/users')
			.then((res) => {
				setUsers(res.data);
				console.log(users);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="App">
			<header>
				<p>Users List</p>
			</header>
			<h1>Welcome to Users List</h1>
			<Route exact path="/">
				{loggedIn ? (
					<Redirect to="/users" />
				) : (
					<LoginUser
						loggedIn={loggedIn}
						setLoggedIn={setLoggedIn}
						getUsers={getUsers}
					/>
				)}
			</Route>

			{loggedIn && (
				<Route exact path="/users" render={() => <UsersList users={users} />} />
			)}
			<Route exact path="/register" render={() => <RegisterUser />} />
		</div>
	);
}

export default App;
