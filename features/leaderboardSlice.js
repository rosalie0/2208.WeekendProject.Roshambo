import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	leaderboard: [],
};

export const leaderboardSlice = createSlice({
	name: 'leaderboard',
	initialState,
	reducers: {
		setLeaderboard: (state, action) => {
			state.leaderboard = action.payload;
		},
	},
});

export const { setLeaderboard } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
