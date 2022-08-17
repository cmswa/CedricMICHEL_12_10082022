import React from 'react'
import './Username.css'

export default function Username({ name }) {
    return (
        <section className="username">
            <h2 className='username__name'>
                Bonjour <span className="username__name--user">{name}</span>
            </h2>
            <p className="username__description">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </section>
    )
}
