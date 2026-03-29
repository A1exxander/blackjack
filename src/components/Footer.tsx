import { Link } from "react-router-dom";
import UnderlineEffect from "./UnderlineEffect";

export default function Footer(): React.ReactElement {
    return (
        <footer className="w-full flex-1 flex flex-col items-center">
            <UnderlineEffect />
            <Link className="pt-8 w-fit text-center" to="/settings">
                <span className="text-offwhite text-md transition-colors duration-300 hover:text-gold">Settings</span>
            </Link>
        </footer>
    );
}