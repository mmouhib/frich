import { configureStore } from '@reduxjs/toolkit';
import matchSettingsReduces from './features/matchSettingsSlice';

export default configureStore({
	reducer: {
		matchSettings: matchSettingsReduces,
	},
});
