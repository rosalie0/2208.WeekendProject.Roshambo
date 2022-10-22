import React from 'react';
import { useParams } from 'react-router-dom';

// Shows their username along with a list of all of the games they’ve played
const PlayerStats = () => {
	const { playerId } = useParams();
	console.log('player id is ', playerId);
	return (
		<div>
			<p>Username:{playerId}</p>
		</div>
	);
};
export default PlayerStats;
