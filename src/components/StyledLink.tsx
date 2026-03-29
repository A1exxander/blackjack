import { Link } from "react-router-dom";

type Variant = "gold-button"; // extendable later

interface StyledLinkProps {
    route: string; // The route to navigate to when the link is clicked
    variant: Variant; // Not nullable as if we wanted an unstyled link, we would just use Link directly
    children: React.ReactNode;
}

const variantStyles: Record<Variant, string> = {
    "gold-button": "text-gold p-1 px-2 border-2 border-gold bg-transparent font-semibold text-md rounded transition-colors duration-300 hover:bg-darkgrey hover:text-gold",
}

export default function StyledLink({route, variant, children}: StyledLinkProps): React.ReactElement {
    if (variant === "gold-button") {
        return (
        <Link to={route} className={variantStyles[variant]}>
            {children}
        </Link>
        );
    }
    return <></>;
}