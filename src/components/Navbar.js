import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact
                    >
                        Главная
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/employees"
                    >
                        Сотрудники
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;