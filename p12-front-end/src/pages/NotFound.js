import React from 'react'
import Header from '../Components/Header/Header';
import SportsNavs from '../Components/SportsNav/SportsNav'
import NotFound from '../Components/NotFound/NotFound';

/** Create page 404 */
export default function Notfound() {
    return (
        <div>
            < Header />
            < SportsNavs />
            < NotFound />
        </div>
    )
}
