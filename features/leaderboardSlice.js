// Change our leaderboard to be powered by redux instead of using local state

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	// Includes an array called allPlayers containing all players usernames
	allPlayers: [],
	// Includes an object called selectedPlayer
	// holding a single selected players information (including all games played by them)
	selectedPlayer: {},
};

export const leaderboardSlice = createSlice({
	name: 'leaderboard',
	initialState,
	reducers: {
		// Sets the array of all players to be the payload its given
		// (which is an array of players)
		setAllPlayers: (state, action) => {
			state.allPlayers = action.payload;
		},

		// sets the currently selected player to be the payload its given
		// (which is an object for a single player)
		setSelectedPlayer: (state, action) => {
			state.selectedPlayer = action.payload;
		},
	},

	// EXTRA CREDIT: addPlayer - adds a brand new player to the allPlayers array
	addPlayer: (state, action) => {
		// TODO!
	},
});

export const { setAllPlayers, setSelectedPlayer, addPlayer } =
	leaderboardSlice.actions;

export default leaderboardSlice.reducer;
