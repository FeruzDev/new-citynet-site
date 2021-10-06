import React from 'react';
import {Link, NavLink} from "react-router-dom";
import MainInternetTraffic from "../InternetTraffic/MainInternetTraffic";
import {getLanguage, getText} from "../../locales";
import {LANGUAGE} from "../../tools/constants";
import AOS from "aos";

const NavbarGeneral = (props) => {
    const changeLang =(lang)=>{
        localStorage.setItem(LANGUAGE, (lang))
        window.location.reload()
    }
    AOS.init();

    return (
        <div>
        <div className="navbar-general navbar-collapse">

            <div className="container">
                <div className="row">
                    <div data-aos="fade-right"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine"
                         className="next">
                        <NavLink  to="/"><img src="/images/logo13.png" alt=""/></NavLink>
                    </div>
                    <div className="prev">
                        <h4   data-aos="fade-down"
                              data-aos-easing="linear"
                              data-aos-duration="800"
                              className="font-family-medium">+998 71 202 11 11
                        </h4>
                        <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className="third-arrow ml-3">
                            <NavLink to="/form">
                                <p>Оставить заявку</p>
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

                        <Link to="/">Главная</Link>

                        <a href="#services">Сервисы</a>
                        <a href="#tariffs">Тарифы</a>
                        <a href="#servicesTwo">Услуги</a>

                    </div>
                    <div className="Personal-Area">
                        <NavLink className="mr-4" to="/contact">Контакты</NavLink>
                        <NavLink to="/ ">Личный кабинет</NavLink>

                    </div>
                </div>

            </div>
        </div>
        </div>

    );
};

export default NavbarGeneral;