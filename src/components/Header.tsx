import { Link } from "react-router-dom";
import UnderlineEffect from "./UnderlineEffect";

interface HeaderProps {
  renderHomePageBtn?: boolean;
}

export default function Header({ renderHomePageBtn = false }: HeaderProps): React.ReactElement {
    return (
        <header>
            <div className="flex items-center gap-2 p-4 justify-between">
                <div className="flex justify-start flex-shrink-0 order-last sm:order-first w-24 sm:w-36"> {/* Preallocate space to prevent layout shift when button appears */}
                    {renderHomePageBtn && (
                        <Link className = "text-gold p-1 px-2 border-2 border-gold bg-transparent font-semibold text-md rounded transition-colors duration-300 hover:bg-darkgrey hover:text-gold" to = "/">
                            <span className="before:content-['Home'] sm:before:content-['Return_Home'] text-center text-sm md:text-md" />
                        </Link>
                    )}
                </div>
                <h1 className="font-display text-lg order-first sm:order-none font-display flex-1 text-center text-xl lg:text-2xl text-gold font-semibold tracking-wide">
                    ♠ BLACKJACK BY ALEXANDER ♥
                </h1>
                <div className="hidden sm:block w-24 sm:w-36 flex-shrink-0" aria-hidden="true" /> {/* Right mirror slot — desktop only, keeps title centered */}
            </div>
            <UnderlineEffect />
        </header>
    );
}