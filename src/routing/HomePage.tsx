import { useState } from "react";
import { Body } from "./Body";
import { generateUUID } from "../utils/UUIDUtils";
import { Link } from "react-router-dom";
import useUsernameStore from "../store/useSettingsStore";
import Footer from "../components/Footer";
import VanillaAndLucasImage from "../assets/vanillaice-and-lucas-raposo.jpg";


export default function HomePage(): React.ReactElement {

    const [gameID] = useState<String>((() => generateUUID()));
    const username = useUsernameStore((state) => state.username);

   return (
    <Body>
        <main className="w-full flex-1 flex flex-col items-center bg-darkgreen">
            <h2 className="sr-only">Home Page</h2>
            <section className="flex flex-col items-center justify-center gap-7">
                <h3 className="pt-6 text-lg lg:text-xl text-offwhite font-semibold tracking-widest">
                    WELCOME {username.toUpperCase()}
                </h3>
                <img
                    src={VanillaAndLucasImage}
                    alt="The greatest dogs to ever live"
                    className="rounded-lg shadow-md w-full max-w-4xl max-h-[50vh] object-cover object-top"
                />
                <Link
                    className="text-gold p-2 px-32 mb-5 border-2 border-gold bg-transparent font-semibold text-md rounded transition-colors duration-300 hover:bg-darkgrey hover:text-gold"
                    to={`/game/${gameID}`}
                >
                    <span>Start Game</span>
                </Link>
            </section>
            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    </Body>
);
}