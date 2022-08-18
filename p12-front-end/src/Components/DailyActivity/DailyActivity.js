import React from 'react'
import './DailyActivity.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DailyActivity({ userActivity }) {
    return (
        <section className="dailyActivity">
            <header className="dailyActivity__header">
                <h3 className="dailyActivity__header__title">Activité quotidienne</h3>
                <div className="dailyActivity__header__decription">
                    <span className="dailyActivity__header__decription-weightIcon"></span>
                    <span className="dailyActivity__header__decription-weight">Poids (kg)</span>
                    <span className="dailyActivity__header__decription-caloriesBurnedIcon"></span>
                    <span className="dailyActivity__header__decription-caloriesBurned">Calories brûlées (kCal)</span>
                </div>
            </header>

            <ResponsiveContainer className="dailyActivity__barChart" width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={userActivity}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 2" vertical={false}  height={1} horizontalPoints={[90, 185]} stroke='#DEDEDE'/>
                    <XAxis dataKey="day"
                    // interval='preserveStartEnd'
                    tickSize='0' //enlève le tiret
                    />
                    <YAxis orientation='right' dataKey="kilogram"/>
                    <YAxis dataKey="calories"
                        fill="#E60000"
                        radius={[3, 3, 0, 0]}
                        barSize={7} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kilogram"
                        fill='#282D30'
                        radius={[3, 3, 0, 0]}
                        barSize={7} />
                    {/* <Bar dataKey="calories"
                        fill="#E60000"
                        radius={[3, 3, 0, 0]}
                        barSize={7} /> */}
                </BarChart>
            </ResponsiveContainer>

        </section>)
}
