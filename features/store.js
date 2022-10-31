import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboardSlice';

export default configureStore({
	reducer: {
		leaderboard: leaderboardReducer,
	},
});
