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
import data from '../mock/data.js'

export default function Profil() {
    return (
        <>
            < Header />
            < SportsNav />
            <main>
                < Username name={data.USER_MAIN_DATA[0].userInfos.firstName} />
                <section className="charts">

                    <div className="charts__contains">
                        < DailyActivity userActivity={data.USER_ACTIVITY[0].sessions} />
                        <div className="charts__contains__cards">
                            < Duration userAverageSession={data.USER_AVERAGE_SESSIONS[0].sessions} />
                            < ActivityType userPerformance={data.USER_PERFORMANCE[0].data} />
                            < Score userScore={data.USER_MAIN_DATA[0]} />
                        </div>
                    </div>

                    < Cards keyData={data.USER_MAIN_DATA[0].keyData} />

                </section>
            </main>
        </>
    )
}
