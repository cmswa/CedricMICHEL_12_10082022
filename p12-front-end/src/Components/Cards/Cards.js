import React from 'react';
import './Cards.css';
import caloriesIcon from '../../assets/icons/calories-icon.svg';
import proteinIcon from '../../assets/icons/protein-icon.svg';
import carbsIcon from '../../assets/icons/carbs-icon.svg';
import fatIcon from '../../assets/icons/fat-icon.svg';

export default function Cards() {
  return (
    <aside className="cards">

        <div className="card__calories card">
            <div className="card__calories--icon cardIcon">
            <img src={caloriesIcon} className="card__calories__icon-img cardImg" alt="" />
            </div>
            <div className="card__calories__information cardInformation">
                <p className="card__calories__information-data cardData">1,930kCal</p>
                <p className="card__calories__information-description cardDescription">Calories</p>
            </div>
        </div>

        <div className="card__proteins card">
            <div className="card__proteins--icon cardIcon">
            <img src={proteinIcon} className="card__proteins__icon-img cardImg" alt="" />
            </div>
            <div className="card__proteins__information cardInformation">
                <p className="card__proteins__information-data cardData">1,930kCal</p>
                <p className="card__proteins__information-description cardDescription">Protéines</p>
            </div>
        </div>

        <div className="card__carbs card">
            <div className="card__carbs--icon cardIcon">
            <img src={carbsIcon} className="card__carbs__icon-img cardImg" alt="" />
            </div>
            <div className="card__carbs__information cardInformation">
                <p className="card__carbs__information-data cardData">1,930kCal</p>
                <p className="card__carbs__information-description cardDescription">Glucides</p>
            </div>
        </div>

        <div className="card__fats card">
            <div className="card__fats--icon cardIcon cardInformation">
            <img src={fatIcon} className="card__fats__icon-img cardImg" alt="" />
            </div>
            <div className="card__fats__information cardInformation">
                <p className="card__fats__information-data cardData">1,930kCal</p>
                <p className="card__fats__information-description cardDescription">Lipides</p>
            </div>
        </div>


    </aside>
  )
}
