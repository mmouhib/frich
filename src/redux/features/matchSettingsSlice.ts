import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayerNameStruct, IScoring } from '../../types/types';

interface IInitialState {
	matchType: number;
	playersCount: number;
	playersNames: IPlayerNameStruct[];
	scoringRules: IScoring;
}

export const matchSettingsSlice = createSlice({
	name: 'matchSettingsSlice',

	initialState: {
		value: {
			matchType: 0,
			playersCount: 0,
			playersNames: [],
			scoringRules: {
				kabbout: 100,
				jokerFiYeddek: 10,
				jokerMfadhel: 25,
				place: 25,
			} as IScoring,
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

		alterscoringRules: (state: any, action: PayloadAction<IScoring>) => {
			state.value.scoringRules = action.payload;
		},
	},
});

export const { alterMatchType, alterPlayersCount, alterPlayersNames, alterscoringRules } =
	matchSettingsSlice.actions;
