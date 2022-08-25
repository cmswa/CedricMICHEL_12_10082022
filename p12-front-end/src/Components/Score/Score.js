import React from 'react'
import './Score.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

export default function Score({ userScore }) {

    function formatScore(data) {
        if (data.todayScore) {
            data.score = data.todayScore
            delete data.todayScore

            return data
        }
    }
    formatScore(userScore)


    return (
        <section className="score chartsCard">
            {/* <h4 className="score__title">Score</h4> */}

            <ResponsiveContainer className='score__RadialBarChart' width="100%" height="100%">
                <RadialBarChart
                    // width={730}
                    // height={250}
                    innerRadius="70%"
                    // outerRadius="80%"
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
                    {/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
                </RadialBarChart>
            </ResponsiveContainer >

        </section>
    )
}
