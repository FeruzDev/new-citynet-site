import React from 'react';
import {Link} from "react-router-dom";



const NavbarHome = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-white home-nav">
                <Link className="navbar-brand" to="/"><img src="/images/icon/logo12.png" alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavv"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavv">
                    <ul className="navbar-nav ">

                        <li className="nav-item active">
                            <Link  className="nav-link" data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="1000" to="/all-news">Новости</Link>

                        </li>


                        <li className="nav-item active">
                            <Link  className="nav-link"  data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="1000" to="/main-provider">Интернет</Link>

                        </li>

                        <li className="nav-item active">
                            <Link  className="nav-link"
                                   data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="1000" to="/itequipment">  IT оборудование</Link>

                        </li>


                        <li className="nav-item active">
                            <Link  className="nav-link"
                                   data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="1000" to="/ItDevelopment">IT разработка</Link>

                        </li>




                        <li className="nav-item active">
                            <Link  className="nav-link"
                                   data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="1000" to="/contact">Контакты</Link>

                        </li>
                        <li className="nav-item">
                            <h4>
                                +998 71 202 11 11
                            </h4>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr/>
        </div>
    );
};

export default NavbarHome;