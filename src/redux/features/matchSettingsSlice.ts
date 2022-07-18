import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayerNameStruct } from '../../types/types';

interface IInitialState {
	matchType: number;
	playersCount: number;
	playersNames: IPlayerNameStruct[];
}

export const matchSettingsSlice = createSlice({
	name: 'matchSettingsSlice',

	initialState: {
		value: {
			matchType: 0,
			playersCount: 0,
			playersNames: [],
		} as IInitialState,
	},

	reducers: {
		alterMatchType: (state: { value: { matchType: number } }, action: PayloadAction<number>) => {
			state.value.matchType = action.payload;
		},

		alterPlayersCount: (
			state: { value: { playersCount: number } },
			action: PayloadAction<number>
		) => {
			state.value.playersCount = action.payload;
		},

		alterPlayersNames: (
			state: { value: { playersNames: IPlayerNameStruct[] } },
			action: PayloadAction<IPlayerNameStruct[]>
		) => {
			state.value.playersNames = action.payload;
		},
	},
});

export const { alterMatchType, alterPlayersCount, alterPlayersNames } = matchSettingsSlice.actions;
