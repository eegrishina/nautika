import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='header'>
                <Link to="/">
                    <img className='header-logo' src="./images/icons/new-logo.png" alt="Nautika"></img>
                </Link>
                <nav className='header-menu'>
                    <ul>
                        <li><Link to='/services'>Услуги</Link></li>
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