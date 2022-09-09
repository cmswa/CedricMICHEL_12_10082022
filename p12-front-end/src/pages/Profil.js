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
import { useParams, useNavigate } from "react-router-dom";
import fetchData from '../service/initialFetch';
import fetchDataMock from '../service/iniatialFetchMock';
import { userDataModel, userDataActivityModel, userDataAverangeSessionsModel, userDataPerformanceModel } from '../service/UserDataModel';

/** Create profile page */
export default function Profil() {

    const [dataApiUserMain, setDataApiUserMain] = useState({});
    const [dataApiUserActivity, setdataApiUserActivity] = useState({});
    const [dataApiUserAverageSessions, setDataApiUserAverageSessions] = useState({});
    const [dataApiUserPerformance, setDataApiUserPerformance] = useState({});

    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData(id)
            .then(data => {
                const formattedUserData = new userDataModel(data.data);
                setDataApiUserMain(formattedUserData);
                // console.log(formattedUserData);
                // console.log(data);

                fetchData(id, "activity")
                    .then(data => {
                        const formattedUserDataActivity = new userDataActivityModel(data.data);
                        setdataApiUserActivity(formattedUserDataActivity)
                    })
                    .catch(err => console.log("Erreur lors de la récupération des données activity", err))

                fetchData(id, "average-sessions")
                    .then(data => {
                        const formattedUserDataAverageSessions = new userDataAverangeSessionsModel(data.data);
                        setDataApiUserAverageSessions(formattedUserDataAverageSessions)
                    })
                    .catch(err => console.log("Erreur lors de la récupération des données average-sessions", err))

                fetchData(id, "performance")
                    .then(data => {
                        const formattedUserDataPerformance = new userDataPerformanceModel(data.data);
                        setDataApiUserPerformance(formattedUserDataPerformance)
                    })
                    .catch(err => console.log("Erreur lors de la récupération des données performance", err))

            })
            .catch(err => console.log("Erreur lors de la récupération des données de l'id", err))
    }, [id, navigate])

    return (
        <>
            < Header />
            < SportsNav />

            {(dataApiUserMain.data || dataApiUserActivity.data || dataApiUserAverageSessions.data || dataApiUserPerformance.data) &&//short circuit operator
                <main>
                    < Username name={dataApiUserMain.userInfos.firstName} />
                    <section className="charts">

                        <div className="charts__contains">
                            < DailyActivity userActivity={dataApiUserActivity.sessions} />
                            <div className="charts__contains__cards">
                                < Duration userAverageSession={dataApiUserAverageSessions.sessions} />
                                < ActivityType userPerformance={dataApiUserPerformance.data} />
                                < Score userScore={dataApiUserMain} />
                            </div>
                        </div>

                        < Cards keyData={dataApiUserMain.keyData} />

                    </section>
                </main>
            }
        </>
    )
}
