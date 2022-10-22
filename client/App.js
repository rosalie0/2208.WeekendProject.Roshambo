import React from 'react';

// Import things used for Route and Link
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Import components
import Play from '../components/Play';
import Leaderboard from '../components/Leaderboard';
import Homepage from '../components/Homepage';
import NotFound from '../components/NotFound';
import PlayerStats from '../components/PlayerStats';
import CreatePlayerForm from '../components/CreatePlayerForm';

const paddingStyle = { padding: '30px' };
// URL '/' : Has two buttons linking to their respective pages - “Leaderboard” and “Play”
const App = () => {
	return (
		<div className="row container" style={paddingStyle}>
			{/* Buttons to different urls */}
			<div id="navbar">
				<Link to="/">
					<button>Home</button>
				</Link>
				<Link to="/leaderboard">
					<button>Leaderboard</button>
				</Link>
				<Link to="/play">
					<button>Play</button>
				</Link>
				<Link to="/create-player">
					<button>Create New Player</button>
				</Link>
			</div>

			{/* Tells the URL in path URL what component it should load (element=) */}
			<Routes>
				<Route exact path="/leaderboard" element={<Leaderboard />} />
				<Route path="/play" element={<Play />} />
				<Route path="leaderboard/:playerId" element={<PlayerStats />} />
				<Route path="/create-player" element={<CreatePlayerForm />} />

				<Route path="/" element={<Homepage />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
