/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import logomain from "assets/image/logomain.png";

import usericon from "assets/image/user_icon.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <div className="logo">
                        <img src={logomain} alt="Logo" />
                        <h3>Heart of the Forge</h3>
                    </div>
                    <nav className={`header_links ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/shop">Каталог</Link></li>
                            <li><Link to="/about">О мастерской</Link></li>
                            <li><Link to="/service">Услуги</Link></li>
                            <li><Link to="/contact">Контакты</Link></li>
                        </ul>
                    </nav>
                    <div className="header_call_trash">
                        <a href="/login">{isMenuOpen ? 'Авторизация' : <img src={usericon} alt="Авторизация" />}</a>
                    </div>
                    <div className={`burger_menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;