import { Link } from "react-router-dom";

interface HeaderProps {
  renderHomePageBtn?: boolean;
}

export default function Header({ renderHomePageBtn = false }: HeaderProps): React.ReactElement {
    return (
    <header>
        <div className="flex px-2 py-4 items-center">

            <div className="w-32"> {/* Preallocate space to prevent layout shift */}
                {renderHomePageBtn && (
                    <Link to="/" className="text-gold p-1 px-2 border-2 border-gold bg-transparent font-semibold text-md rounded transition-colors duration-300 hover:bg-darkgrey hover:text-gold">
                        <span>Return Home</span>
                    </Link>
                )}
            </div>

            <h1 className="font-display flex-1 text-center text-2xl text-gold font-semibold">
                ♠ BLACKJACK BY ALEXANDER ♥
                <div className="absolute left-1/2 w-1/2 h-1 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent mt-2"></div>
            </h1>

        </div>
    </header>
  );

}