import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
	matchType: number;
	playersCount: number;
}

export const matchSettingsSlice = createSlice({
	name: 'matchSettingsSlice',

	initialState: {
		value: {
			matchType: 0,
			playersCount: 0,
		} as IInitialState,
	},

	reducers: {
		alterMatchType: (state, action: PayloadAction<number>) => {
			state.value.matchType = action.payload;
		},

		alterPlayersCount: (state, action: PayloadAction<number>) => {
			state.value.playersCount = action.payload;
		},
	},
});

export const { alterMatchType, alterPlayersCount } = matchSettingsSlice.actions;
