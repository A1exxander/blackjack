import { createBrowserRouter, type DataRouter} from "react-router-dom";
import HomePage from "./HomePage";
import GamePage from "./GamePage";
import SettingsPage from "./SettingsPage";

export const router:DataRouter = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "game/:id", element: <GamePage />},
    {path: "settings", element: <SettingsPage />}
]);