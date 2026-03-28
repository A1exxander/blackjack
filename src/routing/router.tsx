import { createBrowserRouter, type DataRouter} from "react-router-dom";
import Home from "./home";

export const router:DataRouter = createBrowserRouter([
        {path: "/", element: <Home />}
    ]
);