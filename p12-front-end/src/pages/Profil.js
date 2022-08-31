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
// import data from '../mock/data.js'
import { useParams } from "react-router-dom";


export default function Profil() {

    const [dataApiMain, setDataApi] = useState({});
    const [dataApiActivity, setdataApiActivity] = useState({});
    const [dataApiUserAverageSessions, setDataApiUserAverageSessions] = useState({});
    const [dataApiUserPerformance, setDataApiUserPerformance] = useState({});

    let { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/user/${id}`)
            const data = await response.json();
            setDataApi(data)
        }
        fetchData();
    }, [id])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/user/${id}/activity`)
            const data = await response.json();
            setdataApiActivity(data)
        }
        fetchData();
    }, [id])
    console.log(dataApiActivity.data);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
            const data = await response.json();
            setDataApiUserAverageSessions(data);
        }
        fetchData();
    }, [id])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/user/${id}/performance`)
            const data = await response.json();
            setDataApiUserPerformance(data);
        }
        fetchData();
    }, [id])

    return (
        <>
            < Header />
            < SportsNav />

            {(dataApiMain.data && dataApiActivity.data && dataApiUserAverageSessions.data && dataApiUserPerformance.data) &&//short circuit operator
                <main>
                    < Username name={dataApiMain.data.userInfos.firstName} />
                    <section className="charts">

                        <div className="charts__contains">
                            < DailyActivity userActivity={dataApiActivity.data.sessions} />
                            <div className="charts__contains__cards">
                                < Duration userAverageSession={dataApiUserAverageSessions.data.sessions} />
                                < ActivityType userPerformance={dataApiUserPerformance.data.data} />
                                < Score userScore={dataApiMain.data} />
                            </div>
                        </div>

                        < Cards keyData={dataApiMain.data.keyData} />

                    </section>
                </main>
            }
        </>
    )
}
