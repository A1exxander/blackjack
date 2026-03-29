import { useState } from "react";
import StyledLink from "../components/StyledLink";
import { Body } from "./Body";
import { generateUUID } from "../utils/UUIDUtils";

export default function HomePage(): React.ReactElement {

    const [gameID] = useState<String>((() => generateUUID()));
    
    return (
        <Body>
            <main className = "h-full flex flex-col items-center justify-center">
                <h2 className = "sr-only">Home Page</h2>
                <section className="bg-black w-full flex flex-[4] flex-col space-around justify-around items-center">
                    <h3 className="text-xl text-offwhite">WELCOME Alexander</h3>
                    <StyledLink variant="gold-button" route = {`/game/${gameID}`}>
                        <span className="text-xl">Start Game</span>
                    </StyledLink>
                </section>
                <footer className = "w-full flex-1">
                </footer>
            </main>
        </Body>
    );
}