import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav>
                <ul className="nav-bar">
                    <li className="about-me">
                        <NavLink to="/aboutme">
                            ABOUT ME
                        </NavLink>
                    </li>
                    <li className='projects'>
                        <NavLink to="/projects">
                            PROJECTS
                        </NavLink>
                    </li>
                    <li className='contact'>
                        <NavLink to="/contact">
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default Nav;
