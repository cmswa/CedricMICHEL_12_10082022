import React from 'react'
import './Score.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

/**
    * Make score chart (RadialBarChart)
    * @param {array} userScore user data
    * @returns score chart
    */
export default function Score({ userScore }) {

    /**
     * Format multiple score data
     * @param {object} data data
     * @returns only one score data
     */
    function formatScore(data) {
        if (data.todayScore) {
            data.score = data.todayScore
            delete data.todayScore

            return data
        }
    }
    formatScore(userScore)

    /**
     * Format the score in percentage
     * @param {object} data data
     * @returns integer for percentage
     */
    function calculatePercent(data) {
        const score = Number(data.score)

        return Math.round(score * 100) //retourne la valeur d'un nombre arrondi à l'entier le plus proche.
    }
    const scorePercent = calculatePercent(userScore)

    /**
     * Create custom legend for Legend
     * @returns data
     */
    function renderLegend() {
        return <p className="score__RadialBarChart__legend">
            <span className="score__RadialBarChart__legend--percent"> {scorePercent}% </span>
            <span className="score__RadialBarChart__legend--txt"><br />de votre<br />objectif </span>
        </p>
    }


    return (
        <section className="score chartsCard">
            <h4 className="score__title">Score</h4>

            <ResponsiveContainer className='score__RadialBarChart' width="100%" height="100%">
                <RadialBarChart
                    innerRadius="70%"
                    data={[userScore]}
                    startAngle={80}
                    endAngle={440}
                >

                    <RadialBar
                        fill='#FF0000'
                        cornerRadius={25}
                        barSize={10}
                        dataKey='score' />
                    <PolarAngleAxis type='number' domain={[0, 1]} tick={false} />
                    <circle cx="50%" cy="50%" fill='white' r="30%" />
                    <Legend content={renderLegend} verticalAlign='middle' align="center" />
                </RadialBarChart>
            </ResponsiveContainer >

        </section>
    )
}

Score.propTypes = {
    userScore: PropTypes.object.isRequired
}
