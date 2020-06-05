import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function UsersList(props) {
	return (
		<>
			<h2>User's List</h2>
			<ul>
				{props.users.map((user) => (
					<li>{user.name}</li>
				))}
			</ul>
		</>
	);
}

export default UsersList;
