import React from 'react';
import {Link, NavLink} from "react-router-dom";
import DisplayNavbar from "../navbar/DisplayNavbar";
import NavbarHome from "../navbar/NavbarHome";

const HomeInternetChoose = () => {
    return (
        <div className="home-internet-choose ">

<DisplayNavbar/>
            <NavbarHome/>
            <div className="home-navbar">
                <div className="row">

                    <div className="col-md-6">
                        <NavLink to="/"><img src="images/icon/citynet.png" alt=""/></NavLink>
                    </div>
                    <div className="col-md-6">
                        <div className="menus">
                            <a href="#!">О нас</a>
                            <a href="#!">Интернет</a>
                            <a href="#!">Продукты</a>
                            <a href="#!">Партнеры</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chooses d-flex">

                <Link to="/main-provider" className="mediumChild">
                    <span>
                      Интернет
                    </span>
                </Link>

                <Link to="/maintv"  className="mediumChild">
                    <span>
                       IP TV
                    </span>
                </Link>

                <Link to="/telifaniya" className="mediumChild">
                    <span>
                      IP телефония
                    </span>
                </Link>


            </div>



            <div className="contact-footer-home">
                <div className="sot-set-list position-relative  " style={{zIndex: '9999'}}>
                    <a href="https://www.instagram.com/citynet.uz/" target="_blank" ><img src="/images/icon/instagramlogo1.png" alt=""/></a>
                    <a href="https://t.me/citynet_uzb" target="_blank"><img src="/images/icon/telegram1.png" alt=""/></a>
                    <a href="https://www.facebook.com/CITYNET.uz/" target="_blank"><img src="/images/icon/facebook1.png" alt=""/></a>

                </div>
                <div className="sv">
                    <span>
                        Связить с нами
                    </span>
                    <a href="#!">   <img src="/images/icon/sv.png" alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default HomeInternetChoose;