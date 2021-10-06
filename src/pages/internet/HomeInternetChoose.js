import React from 'react';
import {Link, NavLink} from "react-router-dom";
import DisplayNavbar from "../navbar/DisplayNavbar";
import NavbarHome from "../navbar/NavbarHome";
import AOS from "aos";

const HomeInternetChoose = () => {
    AOS.init();

    return (
        <div className="home-internet-choose ">

<DisplayNavbar/>
            <NavbarHome/>
            <div className="home-navbar">
                <div className="row">

                    <div className="col-md-6"
                         data-aos="flip-up"
                         data-aos-duration="1000">
                        <NavLink  to="/"><img src="/images/logo12.png" alt=""/></NavLink>
                    </div>
                    <div className="col-md-6">
                        <div className="menus">
                            <Link
                                data-aos="fade-down"
                         data-aos-duration="1000"
                                data-aos-delay="200"

                                to="/contact">Контакты</Link>
                            <a        data-aos="fade-down"
                         data-aos-duration="1000"

                            >Личный кабинет</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chooses d-flex">
                <Link         data-aos="fade-left"
                              data-aos-duration="1000"
                              data-aos-delay="200"
                              to="/maintv"  className="mediumChild">
                    <span className="font-family-medium">
                       IP TV
                    </span>
                </Link>
                <Link to="/main-provider"
                      className="mediumChild"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                    <span className="font-family-medium">
                      Интернет
                    </span>
                </Link>



                <Link to="/telifaniya"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                      className="mediumChild">
                    <span className="font-family-medium">
                      IP телефония
                    </span>
                </Link>


            </div>



            <div className="contact-footer-home"             >
                <div className="sot-set-list position-relative  " style={{zIndex: '9999'}}>
                    <a href="https://www.instagram.com/citynet.uz/" target="_blank" ><img src="/images/icon/instagramlogo1.png" alt=""/></a>
                    <a href="https://t.me/citynet_uzb" target="_blank"><img src="/images/icon/telegram1.png" alt=""/></a>
                    <a href="https://www.facebook.com/CITYNET.uz/" target="_blank"><img src="/images/icon/facebook1.png" alt=""/></a>

                </div>
                <div    className="sv">
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