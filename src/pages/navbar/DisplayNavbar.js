import React from 'react';
import {Link} from "react-router-dom";



const DisplayNavbar = () => {
    return (
        <div className="display-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-b mb-3">
                <Link className="navbar-brand" to="/"><img src="/images/icon/citynet.png" alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">

                        <li className="nav-item active">
                            <Link  className="nav-link w-auto" to="/all-news">Новости</Link>

                        </li>


                        <li className="nav-item active">
                            <Link  className="nav-link w-auto" to="/main-provider">Интернет</Link>

                        </li>

                        <li className="nav-item active">
                            <Link  className="nav-link w-auto" to="/itequipment">  IT оборудование</Link>

                        </li>


                        <li className="nav-item active">
                            <Link  className="nav-link w-auto" to="/ItDevelopment">IT разработка</Link>

                        </li>




                        <li className="nav-item active">
                            <Link  className="nav-link w-auto" to="/contact">Контакты</Link>

                        </li>
                        <li className="nav-item mb-5 mt-5">
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

export default DisplayNavbar;