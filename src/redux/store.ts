import { configureStore } from '@reduxjs/toolkit';
import { matchSettingsSlice } from './features/matchSettingsSlice';

export default configureStore({
	reducer: {
		matchSettings: matchSettingsSlice.reducer,
	},
});
