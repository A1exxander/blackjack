import { useState } from "react";
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
                <section className="w-full overflow-hidden flex flex-[6] flex-col justify-around items-center">
                    <h3 className="text-xl text-offwhite">Welcome {username}</h3>
                    <div></div>
                    <Link className="text-gold p-2 px-32 border-2 border-gold bg-transparent font-semibold text-md rounded transition-colors duration-300 hover:bg-darkgrey hover:text-gold" to={`/game/${gameID}`}>
                        <span>Start Game</span>
                    </Link>
                </section>
              <footer className="w-full flex-1 flex flex-col items-center">
                <div className="absolute left-1/2 w-full h-1 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                <Link className="pt-8 w-fit text-center" to="/settings">
                    <span className="text-offwhite text-md transition-colors duration-300 hover:text-gold">Settings</span>
                </Link>
            </footer>
            </main>
        </Body>
    );
}