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
        <body className="h-screen w-screen bg-darkgreen">
            <Header renderHomePageBtn={!isHomePage(location.pathname)} />
            {children}
        </body>
    );
}