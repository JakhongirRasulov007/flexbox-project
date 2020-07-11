import React from 'react';
import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";
import sprite from "../img/sprite.svg";
import user3 from "../img/user-3.jpg";
import user4 from "../img/user-4.jpg";
import user5 from "../img/user-5.jpg";
import user6 from "../img/user-6.jpg";

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
            <div className="detail">
                <div className="detail__description">
                    <p className="paragraph">I dont wanna just use lorem randomly generated
                        paragraph text here. Thats why Im typing now, with a number of thoughts
                        in mind. Maybe I would use this text throught my project. hahaha
                    </p>
                    <p className="paragraph">
                    I dont wanna just use lorem randomly generated
                        paragraph text here. Thats why Im typing now, with a number of thoughts
                        in mind. Maybe I would use this text throught my project. hahaha
                    </p>
                    <ul className="list">
                        <li className="list__item">close to the beach</li>
                        <li className="list__item">breakfast included</li>
                        <li className="list__item">free airport shuttle</li>
                        <li className="list__item">free wifi in all rooms</li>
                        <li className="list__item">air conditioning and heating</li>
                        <li className="list__item">pets allowed</li>
                        <li className="list__item">we speak all languages</li>
                        <li className="list__item">perfect for families</li>
                    </ul>
                    <div className="recommend">
                        <p className="recommend__count">
                            Lucy and her friends recommend this...
                        </p>
                        <div className="recommend__friends">
                            <img src={user3} alt="freind photo" className="recommend__photo"/>
                            <img src={user4} alt="freind photo" className="recommend__photo"/>
                            <img src={user5} alt="freind photo" className="recommend__photo"/>
                            <img src={user6} alt="freind photo" className="recommend__photo"/>
                        </div>
                    </div>
                </div>
                <div className="detail__user-reviews">
                    user-reviews
                </div>
            </div>
        </main>
    )
}

export default HoteView;