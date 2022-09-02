import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../../assets/icons/logoSportSee.svg'
import './Header.css'

/** Create horizontal navigation bar */
export default function Header() {
    return (
        <header className='header'>
            <nav className='nav-top'>
                <NavLink to='/' >
                    <img src={Logo} className="nav-top__logo" alt="SportSee" />
                </NavLink>
                <div className="nav-top__links">
                    <NavLink to='/'>
                        Accueil
                    </NavLink>
                    <NavLink to='/'>
                        Profil
                    </NavLink>
                    <NavLink to='/'>
                        Réglage
                    </NavLink>
                    <NavLink to='/'>
                        Communauté
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}
