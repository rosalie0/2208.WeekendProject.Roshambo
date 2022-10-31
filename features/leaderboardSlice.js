import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allPlayers: [],
};

export const leaderboardSlice = createSlice({
	name: 'leaderboard',
	initialState,
	reducers: {
		setAllPlayers: (state, action) => {
			state.allPlayers = action.payload;
		},
	},
});

export const { setAllPlayers } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
