import React from "react";
import sprite from "../img/sprite.svg";


const Sidebar = () =>{
    return(
        <div className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={sprite + "#icon-home"}></use>
                        </svg>
                        <span>hotel</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={sprite + "#icon-key"}></use>
                        </svg>
                        <span>car rent</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={sprite + "#icon-aircraft-take-off"}></use>
                        </svg>
                        <span>flight</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={sprite + "#icon-map"}></use>
                        </svg>
                        <span>map</span>
                    </a>
                </li>
            </ul>
            <div className="legal">
                &copy; all rights reserved
            </div>
        </div>
    )
}

export default Sidebar;