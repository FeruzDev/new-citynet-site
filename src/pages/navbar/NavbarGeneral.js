import React from 'react';
import {NavLink} from "react-router-dom";
import MainInternetTraffic from "../InternetTraffic/MainInternetTraffic";
import {getLanguage, getText} from "../../locales";
import {LANGUAGE} from "../../tools/constants";

const NavbarGeneral = () => {
    const changeLang =(lang)=>{
        localStorage.setItem(LANGUAGE, (lang))
        window.location.reload()
    }
    return (
        <div>
        <div className="navbar-general navbar-collapse">

            <div className="container">
                <div className="row">
                    <div className="next">
                        <NavLink to="/"><img src="/images/logo13.png" alt=""/></NavLink>
                    </div>
                    <div className="prev">
                        <h4 className="font-family-medium">+998 71 202 11 11
                        </h4>
                        <div className="third-arrow ml-3">
                            <NavLink to="/form">
                                <p>Подключить</p>
                                <img src="/images/icon/arrow4.png" className="arrow-img-white" alt=""/>
                            </NavLink>
                        </div>
                        {/*<div>*/}
                        {/*    <button   onClick={()=> changeLang('ru')} >Ru</button>*/}
                        {/*    <button  onClick={()=> changeLang('uz')}>UZ</button>*/}
                        {/*    <button  onClick={()=> changeLang('en')}>EN</button>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </div>
        <div className="navbar-general-one">
            <div className="container">
                <div className="row">
                    <div>
                        <NavLink to="/form">Тарифы</NavLink>
                        <NavLink to="/contact">Контакт</NavLink>

                    </div>
                    <div className="Personal-Area">
                        <NavLink to="/" >   Личный Кабинет</NavLink>
                    </div>
                </div>

            </div>
        </div>
        </div>

    );
};

export default NavbarGeneral;