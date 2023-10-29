import "./Navbar.css"
import { Link } from "react-router-dom";
import {DropDown} from "../dropDown/DropDown";
import { useState } from "react";

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropDown(true);
        }else{
            setDropDown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropDown(false);
        }else{
            setDropDown(false);
        }
    };

  return (
    <>
        <nav className="navbar">
            <Link to='/' className="navbar-logo">
                EPIC <i className="fab fa-firstdraft" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Inicio
                    </Link>
                </li>
                <li className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                    <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                        Excursiones <i className="fas fa-caret-down" />
                    </Link>
                    {dropDown && <DropDown />}
                </li>
                <li className="nav-item">
                    <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                        Servicios
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                        Socios
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                        Nosotros
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                        Contactanos
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                        Personal
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                        Galeria
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
