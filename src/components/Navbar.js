import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link className="StyledLink" to="/Labb_2_Dynamisk_CV/">Hem</Link></li>
                <li><Link className="StyledLink" to="/about">Om mig</Link></li>
                <li><Link className="StyledLink" to="/cv">CV</Link></li>
                <li><Link className="StyledLink" to="/portfolio">Portfolio</Link></li>
                <li><Link className="StyledLink" to="/guidelines">Riktlinjer</Link></li>
            </ul>
        </nav>
    )
}