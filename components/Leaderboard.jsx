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
	const [players, setPlayers] = useState([]);

	const getPlayers = async () => {
		const response = await fetch('/api/players');
		const json = await response.json();
		setPlayers(json);
	};

	useEffect(() => {
		getPlayers();
	}, []);
	return (
		<div className="leaderboard-container">
			<h1> Leaderboard </h1>
			<ul>
				Players:
				{players.map(player => (
					<Link to={`/leaderboard/${player.id}`}>
						<li key={player.id}>{player.username}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Leaderboard;
