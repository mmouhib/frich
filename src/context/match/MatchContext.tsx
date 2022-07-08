import React, { createContext, useState } from 'react';

interface IMatchContextValues {
	playerCount: number;
	setPlayerCount: (arg: number) => void;
	matchType: number;
	setMatchType: (arg: number) => void;
}

export const matchContext = createContext<IMatchContextValues | null>(null);

export default function MatchContextComponent({ children }: { children: React.ReactNode }) {
	const [playerCount, setPlayerCount] = useState<number>(0);
	const [matchType, setMatchType] = useState<number>(0);

	return (
		<matchContext.Provider value={{ playerCount, setPlayerCount, matchType, setMatchType }}>
			{children}
		</matchContext.Provider>
	);
}
