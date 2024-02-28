import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav>
                <ul className="nav bar">
                    <li>
                        <NavLink to="/aboutme">
                            About me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default Nav;
