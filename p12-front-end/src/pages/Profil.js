import React from 'react'
import Header from '../Components/Header/Header'
import SportsNav from '../Components/SportsNav/SportsNav'
import Username from '../Components/Username/Username'
import DailyActivity from '../Components/DailyActivity/DailyActivity'
import Duration from '../Components/Duration/Duration'
import ActivityType from '../Components/ActivityType/ActivityType'
import Score from '../Components/Score/Score'
import Cards from '../Components/Cards/Cards'
import './Profil.css'

export default function Profil() {
    return (
        <>
            < Header />
            < SportsNav />
            <main>
                < Username />
                <section className="charts">
                    < DailyActivity />
                    < Cards />
                    <div className="charts__cards">
                        < Duration />
                        < ActivityType />
                        < Score />
                    </div>
                </section>
            </main>
        </>
    )
}
