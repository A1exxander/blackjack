import { useState } from "react";
import StyledLink from "../components/StyledLink";
import { Body } from "./Body";
import { generateUUID } from "../utils/UUIDUtils";
import { Link } from "react-router-dom";
import useUsernameStore from "../store/useSettingsStore";

export default function HomePage(): React.ReactElement {

    const [gameID] = useState<String>((() => generateUUID()));
    const username = useUsernameStore((state) => state.username);

    return (
        <Body>
            <main className = "h-full flex flex-col items-center justify-center">
                <h2 className = "sr-only">Home Page</h2>
                <section className="pt-2 overflow-hidden flex flex-[6] flex-col space-around justify-around items-center">
                    <h3 className="text-xl text-offwhite">WELCOME {username}</h3>
                    <StyledLink variant="gold-button" route = {`/game/${gameID}`}>
                        <span className="text-xl">Start Game</span>
                    </StyledLink>
                </section>
              <footer className="w-full flex-1 flex flex-col items-center">
                <div className="absolute left-1/2 w-full h-1 -translate-x-1/2 bg-gradient-to-r from-transparent via-offwhite to-transparent"></div>
                <Link className="pt-8 w-fit text-center" to="/settings">
                    <span className="text-offwhite text-xl transition-colors duration-300 hover:text-gold">Settings</span>
                </Link>
            </footer>
            </main>
        </Body>
    );
}