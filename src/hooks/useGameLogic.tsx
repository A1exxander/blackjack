import { useState } from "react";
import useUsernameStore from "../store/useSettingsStore";
import useHand, { type UseHandResponse } from "./useHand";
import useOpponentName from "./useOpponentName";
import type { GameResult, GameState } from "../types";
import { genRandomNum } from "../utils/NumberUtils";
import { BLACKJACK, MAXIMUM_CARD_VALUE, MINIMUM_CARD_VALUE, OPPONENT_STAND_VALUE } from "../constants";

export interface GameLogic {
    handleGameStart: () => void;
    handlePlayerHit: () => void;
    handlePlayerStand: () => void;
    playerName: string;
    opponentName: string;
    opponentHand: number[];
    opponentScore: number;
    playerHand: number[];
    playerScore: number;
    gameState: GameState;
    gameResult: GameResult | null;
}

export default function useGameLogic(): GameLogic {

    const playerName: string = useUsernameStore((state) => state.username);
    const opponentName: string = useOpponentName(playerName);

    const { hand: playerHand, handTotal: playerScore, resetHand: resetPlayerHand, drawCard: drawPlayerCard }: UseHandResponse = useHand();
    const { hand: opponentHand, handTotal: opponentScore, resetHand: resetOpponentHand, drawCard: drawOpponentCard }: UseHandResponse = useHand();

    const [gameState, setGameState] = useState<GameState>("PLAYER_TURN");
    const [gameResult, setGameResult] = useState<GameResult | null>(null);

    const handleGameStart = (): void => {
        setGameState("PLAYER_TURN");
        setGameResult(null);
        resetPlayerHand();
        resetOpponentHand();
    };

    // In the following functions, dont rely on handTotals, as they may be stale due to the async nature of state updates

    const handlePlayerHit = (): void => {
        const newCardValue: number = genRandomNum(MINIMUM_CARD_VALUE, MAXIMUM_CARD_VALUE);
        drawPlayerCard(newCardValue);
        const newTotal: number = playerScore + newCardValue;
        if (newTotal >= BLACKJACK) {
            evaluateGameResult(newTotal, opponentScore);
            setGameState("GAME_FINISHED");
        }
    };

    const handlePlayerStand = async (): Promise<void> => {
        setGameState("OPPONENT_TURN");
        const finalOpponentTotal: number = await playOpponentTurn();
        evaluateGameResult(playerScore, finalOpponentTotal);
        setGameState("GAME_FINISHED");
    };

    const playOpponentTurn = async (): Promise<number> => {
        let currentTotal = opponentScore;
        while (currentTotal < OPPONENT_STAND_VALUE) {
            const newCard = genRandomNum(1, 10);
            drawOpponentCard(newCard);
            currentTotal += newCard;
            await new Promise(res => setTimeout(res, 500)); // delay for animation
        }
        return currentTotal;
    };

    const evaluateGameResult = (playerTotal: number, opponentTotal: number): void => {
        if (playerTotal === BLACKJACK && opponentTotal === BLACKJACK) return setGameResult("TIED");
        if (playerTotal === BLACKJACK) return setGameResult("WON");
        if (opponentTotal === BLACKJACK) return setGameResult("LOST");
        if (playerTotal > BLACKJACK) return setGameResult("LOST");
        if (opponentTotal > BLACKJACK) return setGameResult("WON");
        if (playerTotal > opponentTotal) return setGameResult("WON");
        if (opponentTotal > playerTotal) return setGameResult("LOST");
        return setGameResult("TIED");
    };

    return {handleGameStart, playerName, opponentName, playerHand, playerScore, opponentHand, opponentScore, handlePlayerHit, handlePlayerStand, gameState, gameResult};

}