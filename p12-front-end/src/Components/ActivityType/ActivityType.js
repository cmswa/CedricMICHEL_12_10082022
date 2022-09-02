import React from 'react'
import './ActivityType.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';
import PropTypes from 'prop-types';

/**
    * Make "type of activity" chart (RadarChart)
    * @param {array} userPerformance user data
    * @returns type of activity chart
    */
export default function ActivityType({ userPerformance }) {

    /**
     * Format PolarAngleAxis ticks in french
     * @param {string} kind english labels
     * @returns french labels
     */
    const renderActivityType = (kind) => {
        switch (kind) {
            case 1: return 'Cardio';
            case 2: return 'Energie';
            case 3: return 'Endurance';
            case 4: return 'Force';
            case 5: return 'Vitesse';
            case 6: return 'Intensité';
            default: return '';
        }
    }

    /**
     * Reverse array
     * @returns a new array reversed
     */
    const userPerformanceReversed = ([...userPerformance]).reverse()

    return (
        <section className="activityType chartsCard">

            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={userPerformanceReversed}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey='kind'
                        tick={{ fontSize: 12, fontWeight: 500 }}
                        stroke='#FFF'
                        tickLine={false}
                        tickFormatter={renderActivityType} />

                    <PolarRadiusAxis axisLine={false} tick={false} domain={[0, 'dataMax+20']} />
                    <Radar dataKey='value' fill="rgba(255, 1, 1, 0.7)" />
                </RadarChart>
            </ResponsiveContainer>

        </section>
    )
}

ActivityType.propTypes = {
    userPerformance: PropTypes.array.isRequired
} 