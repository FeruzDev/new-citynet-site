import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-pair container">
            <div className="row">
                <div className="col-md-3">
                   <NavLink to="/home-iptv"> <img src="/images/icon/logoFooter.png" alt=""/></NavLink>
                </div>
                <div className="col-md-3">
                    <h3>
                        Направление
                    </h3>
                    <a href="#!">Интернет</a>
                    <NavLink to="/video-monitoring">Видеонаблюдение</NavLink>
                    <a href="#!">Проектирование</a>
                    <a href="#!">Монтаж</a>
                </div>

                <div className="col-md-3">
                    <h3>О компании</h3>
                    <a href="#!">О нас</a>
                    <a href="#!">Продукты</a>
                    <a href="#!">Партнеры</a>
                </div>
                <div className="col-md-3">
                    <h3>
                        Локация
                    </h3>
                    <p>

                        город Ташкент, Шайхантахурский р-н, <br/>
                        ул. Кичик Халка Йули, 2А.

                        info@citynet.uz <br/>
                        +998 71 202 1111
                    </p>
                </div>
            </div>

            <div className="row sub-footer-pr">
                    <h3>Служба поддержки</h3>
            </div>
            <div className="row sub-footer">
                <div className="sot-set">
                    <a href="#!"><img src="/images/icon/instagram.png" alt=""/></a>
                    <a href="#!"><img src="/images/icon/telegram.png" alt=""/></a>
                    <a href="#!"><img src="/images/icon/facebook.png" alt=""/></a>
                </div>
                <div className="contacts">

                    <h1>+998 71 202 11 11</h1>
                </div>
            </div>
            <div className="row sub-footer-pe">
                <h5>EazyCamper. All rights reserved. </h5>
            </div>
        </div>
    );
};

export default Footer;