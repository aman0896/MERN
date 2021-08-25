import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './css/Navbar.css';
export default function Navbar() {
    const [active, setActive] = useState(false);
    const location = useLocation();
    const handleClick = () => {};

    return (
        <nav className="NavbarItems">
            <div className="navbar-container">
                <h2 className="navbar-logo">Dashboard</h2>
                <ul className="nav-menu">
                    <li className={'navbar-links'}>
                        <a
                            style={{
                                color:
                                    location.pathname === '/signup'
                                        ? 'red'
                                        : '',
                            }}
                            href="/signup"
                            onClick={handleClick}
                        >
                            Signup
                        </a>
                    </li>
                    <li className="navbar-links">
                        <a
                            style={{
                                color:
                                    location.pathname === '/login' ? 'red' : '',
                            }}
                            href="/login"
                        >
                            Login
                        </a>
                    </li>
                    <li className="navbar-links">
                        <a
                            style={{
                                color:
                                    location.pathname === '/employee'
                                        ? 'red'
                                        : '',
                            }}
                            href="/employee"
                        >
                            Employee
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
