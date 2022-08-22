import React from 'react'
import './Duration.css'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


export default function Duration({ userAverageSession }) {



    return (
        <section className="duration chartsCard">
            {/* <h4 className="duration__title">Durée moyenne des sessions</h4> */}
            {/* <div className="lineChart"> </div> */}

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={userAverageSession}
                    margin={{ top: 80, right: 10, bottom: 50, left: 10 }} >

                    <XAxis dataKey="day"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fontWeight: 500 }}
                        stroke="rgba(255, 255, 255, 0.5)"
                        tickMargin={40} />

                    <Tooltip cursor={false} />
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
