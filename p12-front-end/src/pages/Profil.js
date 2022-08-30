import React, { useState, useEffect } from 'react'
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
import { useParams } from "react-router-dom";


export default function Profil() {

    const [dataApi, setDataApi] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/user/12/average-sessions')
            const data = await response.json();
            setDataApi(data)
            console.log('data', data);
        }
        fetchData();
    }, [])
    console.log(id);
    console.log(dataApi);

    return (
        <>
            {/* <div>{dataApi.USER_MAIN_DATA}</div> */}
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
