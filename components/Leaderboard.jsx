import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAllPlayers } from '../features/leaderboardSlice';

// On load, makes a get request to /api/players
// Stores the result store's leaderboardSlice
// Displays a list of all players usernames
// Clicking on a player takes you to the single player page (Remember the react-router-dom <Link /> component)

const Leaderboard = () => {
	// State - using React Hooks
	// const [players, setPlayers] = useState([]);

	// State using our redux slice
	const players = useSelector(state => state.leaderboard.allPlayers);
	console.log(players);

	const dispatch = useDispatch();

	// API Fetch
	const getPlayers = async () => {
		console.log('Fetching players from db...');
		const response = await fetch('/api/players');
		const json = await response.json();
		// setPlayers(json); //*** Using regular React Hooks and state*/
		dispatch(setAllPlayers(json)); // Dispatch with custom made setter from redux slice
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
