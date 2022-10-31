import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PlayerStats from './PlayerStats';

// On load, makes a get request to /api/players
// Stores the result in state
// Displays a list of all players usernames
// Clicking on a player takes you to the single player page (Remember the react-router-dom <Link /> component)

const Leaderboard = () => {
	// State
	const [players, setPlayers] = useState([]); //********* */

	// API Fetch
	const getPlayers = async () => {
		console.log('Fetching players from db...');
		const response = await fetch('/api/players');
		const json = await response.json();
		setPlayers(json); //********* */
	};

	// UseEffect
	useEffect(() => {
		console.log('Inside Leaderboards UseEffect []!');
		getPlayers();
	}, []);

	return (
		<div className="leaderboard-container">
			<h1> Leaderboard </h1>
			<ul>
				Players:
				{players.map(player => (
					<Link to={`/leaderboard/${player.id}`} key={player.id}>
						<li>{player.username}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Leaderboard;
