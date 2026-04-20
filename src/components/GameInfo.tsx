import type { GameState } from "../types"

interface GameInfoProps {
    playerName: string;
    opponentName: string;
    playerScore: number;
    opponentScore: number;
    gameState: GameState;
}

export default function GameInfo({playerName, opponentName, playerScore, opponentScore, gameState}: GameInfoProps): React.ReactElement {
    
    const formatPossessive = (name: string): string => {
        return name.endsWith("s") ? `${name}'` : `${name}'s`;
    }

    const getTurnText = (): string => {
        if (gameState === "GAME_FINISHED") return "Game finished";
        const name = gameState === "PLAYER_TURN" ? playerName : opponentName;
        return `${formatPossessive(name)} turn`;
    };

    const getOpponentScoreText = ():string => {
        return gameState === "PLAYER_TURN" ? "?" : `${playerScore}`;
    }

    return (
        <aside>
            <h3 className="sr-only">Game Info</h3>
            <div className = "flex flex-col">
                <span className="text-center bg-darkgrey p-1 lg:p-3 text-sm sm:text-md text-offwhite font-semibold">PLAYING AGAINST: {opponentName.toUpperCase()}</span>
                <span className="text-center p-1 lg:p-2 text-xs sm:text-sm bg-black text-offwhite font-semibold">{getTurnText().toUpperCase()}</span>
                <span className="text-center pb-1 lg:pb-2 text-xs sm:text-sm bg-black flex-1 text-offwhite">{playerScore} - {gameState === "PLAYER_TURN" ? "??" : getOpponentScoreText()}</span>
            </div>
        </aside>
    );

}