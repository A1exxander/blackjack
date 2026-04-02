import { useEffect, useState } from "react";

export default function useOpponentName(playerName: string): string {

    const [opponentName, setOpponentName] = useState<string>(() => "Vanilla");

    useEffect(() => {
        if (playerName == "Lucas"){
            setOpponentName("Vanilla");
        }
        else if (playerName == "Vanilla"){
            setOpponentName("Lucas");
        }
        else {
            setOpponentName("Tootsie");
        }
    }, [playerName]);

    return opponentName;

}