
import { Body } from "./Body"
import GameInfo from "../components/GameInfo";
import useGameLogic from "../hooks/useGameLogic";

export default function GamePage(): React.ReactElement {
    const { handleGameStart, playerName, opponentName, playerHand, playerScore, opponentHand, opponentScore, handlePlayerHit, handlePlayerStand, gameState, gameResult } = useGameLogic()

    if (gameState !== "GAME_FINISHED") {
        return (
            <Body>
                <main className = "h-full">
                    <h2 className = "sr-only">Game Page</h2>
                    <div className="flex flex-col justify-center items-center md:h-full md:flex-row">
                        <div className = "w-full mt-8 md:mt-0 md:w-fit">
                            <GameInfo playerName = {playerName} opponentName={opponentName} playerScore={playerScore} gameState={gameState} opponentScore={opponentScore}/>
                        </div>
                        <div className = "h-full flex-1">
                        </div>   
                    </div>   
                </main>
            </Body>
        );
    }
    else {
        return <>Placeholder</>
    }

}