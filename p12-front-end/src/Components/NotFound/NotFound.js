import React from 'react'
import { Link } from "react-router-dom";
import './NotFound.css'

/** Create 404 page*/
export default function NotFound() {
    return (
        <section className='notFound'>
            <h1 className="notFound__title">
                404
            </h1>
            <h2 className="notFound__txt">
                Oups! La page que vous demandez n'existe pas.
            </h2>

            <Link className='notFound__link' to='/user/12'>Retourner sur la page profil de l'utilisateur id 12</Link>
            <p>ou</p>
            <Link className='notFound__link' to='/user/18'>Retourner sur la page profil de l'utilisateur id 18</Link>
        </section>
    )
}