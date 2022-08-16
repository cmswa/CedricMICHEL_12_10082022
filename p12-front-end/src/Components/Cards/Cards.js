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
            <div className="card__calories__icon">
            <img src={caloriesIcon} className="card__calories__icon-img" alt="" />
            </div>
            <div className="card__calories__information">
                <p className="card__calories__information-data">1,930kCal</p>
                <p className="card__calories__information-description">Calories</p>
            </div>
        </div>

        <div className="card__calories card">
            <div className="card__calories__icon">
            <img src={caloriesIcon} className="card__calories__icon-img" alt="" />
            </div>
            <div className="card__calories__information">
                <p className="card__calories__information-data">1,930kCal</p>
                <p className="card__calories__information-description">Calories</p>
            </div>
        </div>

        <div className="card__calories card">
            <div className="card__calories__icon">
            <img src={caloriesIcon} className="card__calories__icon-img" alt="" />
            </div>
            <div className="card__calories__information">
                <p className="card__calories__information-data">1,930kCal</p>
                <p className="card__calories__information-description">Calories</p>
            </div>
        </div>

        <div className="card__calories card">
            <div className="card__calories__icon">
            <img src={caloriesIcon} className="card__calories__icon-img" alt="" />
            </div>
            <div className="card__calories__information">
                <p className="card__calories__information-data">1,930kCal</p>
                <p className="card__calories__information-description">Calories</p>
            </div>
        </div>


    </aside>
  )
}
