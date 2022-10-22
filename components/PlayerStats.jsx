import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const playerStatsContainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
};

// Shows their username along with a list of all of the games they’ve played
const PlayerStats = () => {
	const { playerId } = useParams(); // Get the playerID from URL params

	// STATE
	const [player, setPlayer] = useState({}); // Start with empty obj
	const [doneLoading, setDoneLoading] = useState(false); // True if no longer loading

	// API Fetch
	const getPlayer = async () => {
		const response = await fetch(`/api/players/${playerId}`);
		const json = await response.json();
		setPlayer(json);
		setDoneLoading(true); // Now we can map through player.games because it has loaded!
	};

	// UseEffect
	useEffect(() => {
		getPlayer();
	}, []);

	// console.log('Is player.games an array? ', Array.isArray(player.games));

	// Cannot do player.games.map if it has not loaded yet.
	// Therefore, use state doneLoading to prevent the map from running on {}.
	if (!doneLoading) return <p>Loading...</p>;
	else
		return (
			<div style={playerStatsContainerStyle}>
				<p>Username: {player.username}</p>
				<ul>Games Played: </ul>
				{player.games.map(game => (
					<li key={game.id}>
						Played Game {game.id} with a result of {game.result}
					</li>
				))}
			</div>
		);
};
export default PlayerStats;
