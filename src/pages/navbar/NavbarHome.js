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
                            <a className="nav-link" href="#">Контакты <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link active" href="#">Бизнесу</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Услуги</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link disabled" href="#">Личный кабинет</a>
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