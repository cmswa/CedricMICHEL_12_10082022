import React from 'react'
import './DailyActivity.css'

export default function DailyActivity() {
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

            <div className="dailyActivity__barChart">

            </div>

        </section>)
}
