import React from 'react';
import {NavLink} from "react-router-dom";

const NavbarProvider = () => {
    return (
        <div className="navbar-provider">

            <div className="row">
                <div className="col-md-6">
                    <img src="/images/icon/logoblack.png" alt=""/>
                </div>
                <div className="col-md-6">
                    <NavLink to="/">Тарифы</NavLink>
                    <NavLink to="/">Услуги</NavLink>
                    <NavLink to="/">Бизнесу</NavLink>
                    <NavLink to="/">Контакты</NavLink>
                    <NavLink to="/" className="con-btn">Подключить <img src="/images/icon/Arrow4.png" alt=""/></NavLink>
                </div>
            </div>

        </div>
    );
};

export default NavbarProvider;