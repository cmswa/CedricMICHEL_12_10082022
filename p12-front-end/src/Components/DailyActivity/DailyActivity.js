import React from 'react'
import './DailyActivity.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
    * Make "daily activity" chart (BarChart)
    * @param {array} userActivity user data
    * @returns daily activity chart
    */
export default function DailyActivity({ userActivity }) {

    /**
     * Get the day of the full date
     * @param {string} value full date (Year-month-day)
     * @returns {number} day
     */
    const renderXAxisNumber = (day) => {
        const dayNumber = day.split('-')
        return (Number(dayNumber[2])) //La méthode split() divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau.
    }

    /**
     * Create Tooltip
     * @param {array} payload data
     * @param {boolean} active is Tooltip active
     * @returns value on hover
     */
    //https://recharts.org/en-US/api/Tooltip
    function CustomTooltip({ payload, active }) { //payload: The source data of the content to be displayed in the tooltip, usually calculated internally. active: If set true, the tooltip is displayed. If set false, the tooltip is hidden, usually calculated internally.
        if (active) {
            return (
                <div className='dailyActivity__barChart--tooltip'>
                    <div>{`${payload[0].value}`}kg</div>
                    <div>{`${payload[1].value}`}Kcal</div>
                </div>
            )
        }
        return null
    }

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

            <ResponsiveContainer className="dailyActivity__barChart" width="100%" height="80%">
                <BarChart
                    data={userActivity}
                    margin={{
                        top: 30, right: 25, left: 25, bottom: 30
                    }}
                >
                    <CartesianGrid vertical='false' strokeDasharray='2 2' height={1} horizontalPoints={[30, 125]} />
                    <XAxis className='dailyActivityXAxis'
                        dataKey='day'
                        tickFormatter={renderXAxisNumber} //The formatter function of tick(Set the values of axis ticks)
                        interval='preserveStartEnd'
                        tickSize='0' //enlève le "tiret" (The length of tick line.)
                        tickMargin='25' //The margin between tick line and tick.
                        stroke='#9B9EAC'
                    />
                    <YAxis
                        dataKey='calories'
                        yAxisId='right'
                        hide='true' />
                    <YAxis className='dailyActivityYAxis'
                        dataKey='kilogram'
                        yAxisId='left'
                        orientation='right'
                        type='number'
                        domain={['dataMin -1', 'dataMax']} //affiche -1kg du poids minimum de l'user, jusqu'au poids maximum (https://recharts.org/en-US/api/XAxis#domain)
                        tickCount='3' //The count of axis ticks. 
                        tickSize='0'
                        axisLine={false} //If set false, no axis line will be drawn
                        tickMargin='30'
                        width={45}
                        stroke='#9B9EAC' />
                    {/* https://recharts.org/en-US/examples/CustomContentOfTooltip - wrapperStyle Tooltip: border*/}
                    <Tooltip wrapperStyle={{ outline: 'none' }} content={<CustomTooltip />} />
                    <Bar
                        dataKey='kilogram'
                        yAxisId='left'
                        fill='#282D30'
                        radius={[3, 3, 0, 0]}
                        barSize={7} />
                    <Bar
                        dataKey='calories'
                        yAxisId='right'
                        fill='#E60000'
                        radius={[3, 3, 0, 0]}
                        barSize={7} />
                </BarChart>
            </ResponsiveContainer>

        </section>)
}

DailyActivity.propTypes = {
    userActivity: PropTypes.array.isRequired
}