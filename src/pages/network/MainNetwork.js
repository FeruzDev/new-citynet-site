import React from 'react';
import DisplayNavbar from "../navbar/DisplayNavbar";
import NavbarHome from "../navbar/NavbarHome";

const MainNetwork = () => {
    return (
        <nav className="network-part-main navbar">

            <div className="container">

               <div className="navbar-header">
                   <a href="#" className="navbar-brand"><img src="images/icon/citynet.png" alt=""/></a>
               </div>

                <ul className="nav">
                    <li>
                        <a href="#">О нас</a>
                    </li>
                    <li>
                        <a href="#">Интернет</a>
                    </li>
                    <li>
                        <a href="#">Продукты</a>
                    </li>
                    <li>
                        <a href="#">Партнеры</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNetwork;