import React, { useState } from 'react';
import axios from 'axios'; // Axios makes POST easier.
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../features/leaderboardSlice';

// Displays a small form with two items:
// Username text input: decides the new user's username
// Submit button: Makes a post request to /api/players sending up the players username

// Styles
const invalidStyle = { color: 'red' };
const invalidButtonStyle = { opacity: '0.2' };
const createPlayerContainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
};

// POST to /api/players takes an obj with just one key/value, called username.
const CreatePlayerForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [validUsername, setValidUsername] = useState(true);

	// Check username is valid. Specifically, don't allow if username already taken.
	// Case insensitive. Trying rOsE when user Rose exists is not valid.
	// As user types, query if it already exists.
	const isValidUsername = async currentInput => {
		const { data } = await axios.get('api/players');

		// If found in db, set validUsername to false.
		if (
			data.find(
				user => user.username.toLowerCase() === currentInput.toLowerCase()
			)
		) {
			setValidUsername(false);
		} else {
			setValidUsername(true);
		}
	};

	const handleFormSubmit = event => {
		event.preventDefault(); // Don't let HTML do its own POST.

		// Only make POST req if username is valid.
		if (validUsername) {
			const body = { username }; // Create body for POST

			// Update backend
			axios.post('api/players', body); // No need to await - don't let client wait.

			// Update front end, our redux state, too!
			dispatch(addPlayer(body));

			// Redirect user to /leaderboard
			navigate('/leaderboard');
		}
	};

	const handleInputUsername = event => {
		const str = event.target.value;
		setUsername(str);
		isValidUsername(str);
	};

	return (
		<div style={createPlayerContainerStyle}>
			<h1>Create new player form:</h1>
			<form onSubmit={handleFormSubmit}>
				<label>
					Username:{' '}
					<input type="text" value={username} onChange={handleInputUsername} />
				</label>
				{!validUsername && (
					<span style={invalidStyle}>
						{' '}
						User named {username} already exists...
					</span>
				)}
				<div>
					<button
						type="submit"
						style={validUsername ? null : invalidButtonStyle}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePlayerForm;
