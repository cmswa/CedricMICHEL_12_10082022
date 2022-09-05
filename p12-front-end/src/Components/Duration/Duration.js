import React from 'react'
import './Duration.css'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import PropTypes from 'prop-types';

/**
    * Make "average duration of session" chart (LineChart)
    * @param {array} userAverageSession user data
    * @returns average duration of session chart
    */
export default function Duration({ userAverageSession }) {

    /**
     * Format XAxis ticks
     * @param {Number} day day of the week
     * @returns letter of the day
     */
    const renderXAxisLetter = (day) => {
        switch (day) {
            case 1: return 'L';
            case 2: return 'M';
            case 3: return 'M';
            case 4: return 'J';
            case 5: return 'V';
            case 6: return 'S';
            case 7: return 'D';
            default: return '';
        }
    }

    /**
     * Create Tooltip
     * @param {array} payload data 
     * @param {boolean} active is Tooltip active
     * @returns value on hover (when the line is pointed)
     */
    function tooltipSessionDurationChart({ payload, active }) {
        if (active) {
            return (
                <div className='duration__BarChart--tooltip'>
                    <p>{`${payload[0].value}`} min</p>
                </div>
            )
        }
        return null
    }

    /**
     * Create custom cursor for Tooltip
     * @param {object} props data (positioning) 
     * @returns transparent rectangle on hover
     */
    const CustomCursor = (props) => {
        const { points, width } = props;
        const { x, y } = points[0];
        return (
            <Rectangle
                fill="#000"
                opacity={0.1}
                x={x}
                y={y - 80}
                width={width + 30}
                height={260}
            />
        );
    };

    return (
        <section className="duration chartsCard">
            <h4 className="duration__title">Durée moyenne des sessions</h4>

            <ResponsiveContainer className='duration__BarChart' width="100%" height="100%">
                <LineChart
                    data={userAverageSession}
                    margin={{ top: 80, right: 10, bottom: 50, left: 10 }} >

                    <XAxis dataKey="day"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fontWeight: 500 }}
                        stroke="rgba(255, 255, 255, 0.5)"
                        tickMargin={40}
                        tickFormatter={renderXAxisLetter} />

                    <Tooltip cursor={<CustomCursor />}
                        wrapperStyle={{ outline: 'none' }}
                        content={tooltipSessionDurationChart} />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#colorUv)"
                        dot={false}
                        strokeWidth={2} />
                    <defs>
                        <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                </LineChart>
            </ResponsiveContainer>

        </section>)
}

Duration.propTypes = {
    userAverageSession: PropTypes.array.isRequired
}