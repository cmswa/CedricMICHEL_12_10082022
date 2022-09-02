import React from 'react'
import { NavLink } from "react-router-dom";
import yogaLogo from '../../assets/icons/yoga.svg'
import swimmingLogo from '../../assets/icons/swimming.svg'
import cyclingLogo from '../../assets/icons/cycling.svg'
import fitnessLogo from '../../assets/icons/fitness.svg'
import './SportsNav.css'

/**
 * Create vertical navigation bar
 */
export default function Sports() {
    return (
        <section className="sports">
            <nav className='nav-left'>

                <NavLink to='/'>
                    <img src={yogaLogo} className="nav-left__logo" alt="yoga" />
                </NavLink>
                <NavLink to='/'>
                    <img src={swimmingLogo} className="nav-left__logo" alt="natation" />
                </NavLink>
                <NavLink to='/'>
                    <img src={cyclingLogo} className="nav-left__logo" alt="cyclisme" />
                </NavLink>
                <NavLink to='/'>
                    <img src={fitnessLogo} className="nav-left__logo" alt="fitness" />
                </NavLink>

            </nav>
            <span className="nav-left__txt">Copiryght, SportSee 2020</span>
        </section>
    )
}
