import React from "react";
import Header from "../components/Header";
import { useLocation, type Location } from "react-router-dom";
import { isHomePage } from "../utils/PageUtils";

interface BodyProps {
  children: React.ReactNode;
}

export function Body({children}: BodyProps): React.ReactElement {
    const location:Location = useLocation();
    return (
        <div className="h-screen w-screen bg-darkgreen"> {/* Body is already provided by React */}
            <Header renderHomePageBtn={!isHomePage(location.pathname)} />
            {children}
        </div>
    );
}