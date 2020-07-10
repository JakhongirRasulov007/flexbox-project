import React from 'react';
import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";
import sprite from "../img/sprite.svg";

const HoteView = () => {
    return(
        <main className="hotel-view">
            <div className="gallery">

                <figure className="gallery__item">
                    <img src={hotel1} alt="hotel photo" className="gallery__photo"/>
                </figure>

                <figure className="gallery__item">
                    <img src={hotel2} alt="hotel photo" className="gallery__photo"/>
                </figure>

                <figure className="gallery__item">
                    <img src={hotel3} alt="hotel photo" className="gallery__photo"/>
                </figure>

            </div>
            <div className="overview">
                <h1 className="overview-heading">Tashkent Hotel</h1>
                <div className="overview-stars">
                    <svg className="overview__icon-star">
                        <use xlinkHref={sprite + "#icon-star-full"}></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref={sprite + "#icon-star-full"}></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref={sprite + "#icon-star-full"}></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref={sprite + "#icon-star-full"}></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref={sprite + "#icon-star-full"}></use>
                    </svg>
                </div>
                <div className="overview__location">
                    <svg className="overview__icon-location">
                        <use xlinkHref={sprite + "#icon-location-pin"}></use>
                    </svg>
                    <button className="btn-inline">Our location</button>
                </div>
                <div className="overview__rating">
                    <div className="overview__rating-average">4.9</div>
                    <div className="overview__rating-count">777 votes</div>
                </div>
            </div>
        </main>
    )
}

export default HoteView;