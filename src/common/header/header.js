import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Style from './header.module.scss';

const Header = () => {
    return <header className={`${Style.header} header container`}>
        <Link className="header__link--home" to="/">
            <img src={logoImg} alt="Logo WebMotors" className="link-home__logo-webmotors" />
        </Link>
    </header>
}

export default Header;