import React from "react";
import logo from "../img/logo.png";
import sprite from "../img/sprite.svg";
import userPhoto from "../img/user.jpg";

const Header = () => {
    return(
        <header className="header">
            <img src={logo} alt="" className="logo"/>
            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="find hotels"/>
                <button className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref={sprite + "#icon-search"}></use>
                    </svg>
                </button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                        <use xlinkHref={sprite + "#icon-bookmark"}></use>
                        </svg>
                        <span className="user-nav__notification">17</span>
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={sprite + "#icon-chat"}></use>
                    </svg>
                    <span className="user-nav__notification">3</span>
                </div>
                <div className="user-nav__user">
                    <img src={userPhoto} alt="user img" className="user-nav__user-photo"/>
                    <span className="user-nav__user-name">User</span>
                </div>
             </nav>
        </header>
    )
}

export default Header;