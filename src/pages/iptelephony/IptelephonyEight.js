import React from 'react';
import {NavLink} from "react-router-dom";
import {Navbar} from "reactstrap";

const IptelephonyEight = () => {
    return (

        <div className="iptelephony-part-eight">
            

            <div className="container iptelephony-part-eight-child">
                <div className="row">
                    <div className="col-md-3 col-sm-6 ">
                       <NavLink to="/"> <img src="/images/icon/ipteight1.png" alt=""/></NavLink>
                    </div>
                    <div className="col-sm-6 col-md-3 ">
                        <h4>Направление</h4>
                        <NavLink to="/home-internet">Интернет</NavLink>
                        <NavLink to="/video-monitoring">Видеонаблюдение</NavLink>
                        <NavLink to="/main-provider">Проектирование</NavLink>
                        <NavLink  to="Installation">Монтаж</NavLink>
                    </div>
                    <div className="col-md-3 col-sm-6 ">
                        <h4>О компании</h4>
                        <a href="#company">О нас</a>
                        <a href="#partner">Партнеры</a>
                    </div>
                    <div className="col-md-3 col-sm-6 ">
                        <h4>Локация</h4>
                        <p>
                            Ташкент, Чилонзор
                            Улица Сеула, дом 14
                            info@citynet.uz
                            +998 71 202 1111
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 eight-right">
                        <h5>Служба поддержки</h5>
                        <p>+998 71 202 11 11</p>
                    </div>
                </div>
                <hr/>
                <div className="eight-footer">
                    <div><p>EazyCamper. All rights reserved. </p></div>
                    <div>
                        <a href="#"><img src="/images/icon/iptinstagrm.png" alt=""/></a>
                        <a href="#"><img src="/images/icon/ipttelegram.png" alt=""/></a>
                        <a href="#"><img src="/images/icon/iptfacebook.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IptelephonyEight;