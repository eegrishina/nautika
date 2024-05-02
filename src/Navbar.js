import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [burgerStyle, setBurgerStyle] = useState(false);

    return (
        <div className="navbar">
            <div className={burgerStyle ? 'header burger-visible' : 'header'}>
                <Link to="/">
                    <img className='header-logo' src="./images/icons/new-logo.png" alt="Nautika"></img>
                </Link>
                <div className="burger-menu" onClick={() => setBurgerStyle(!burgerStyle)}><span></span></div>
                <nav className='header-menu'>
                    <ul>
                        <li>
                            <details>
                                <summary><Link to='/services'>Услуги</Link></summary>
                                <ul>
                                    <li><Link to='/education'>Обучение</Link></li>
                                    <li><Link to='/walks'>Прогулки</Link></li>
                                    <li><Link to='/rent'>Аренда</Link></li>
                                    <li><Link to='/certificates'>Фотосессии</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to='/certificates'>Сертификаты</Link></li>
                        <li><Link to='/about'>О нас</Link></li>
                        <li><Link to='/weather'>Погода</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                    </ul>
                </nav>
                <div className='header-phone'>+7 869 468 48 68</div>
            </div>
        </div>
    );
} 