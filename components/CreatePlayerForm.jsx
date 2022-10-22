import React, { useState } from 'react';
import axios from 'axios'; // Axios makes POST easier.

// Displays a small form with two items:
// Username text input: decides the new users  username
// Submit button: Makes a post request to /api/players sending up the players username

const CreatePlayerForm = () => {
	const [username, setUsername] = useState('');

	const handleInputUsername = event => {
		const str = event.target.value;
		setUsername(str);
	};

	return (
		<div>
			Form!!
			<form>
				<label for="username">Username: </label>
				<input type="text" value={username} onChange={handleInputUsername} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default CreatePlayerForm;
