import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Navbar} from "reactstrap";

const IptelephonyEight = () => {
    return (

        <div className="iptelephony-part-eight">
            

            <div className="container iptelephony-part-eight-child">
                <div className="row">
                    <div className="col-md-3 col-sm-6 ">
                       <NavLink to="/"> <img src="/images/logo14.png" alt=""/></NavLink>
                    </div>
                    <div className="col-sm-6 col-md-3 ">
                        <h4  className="font-family-medium">Направление</h4>
                        <NavLink to="/main-provider">Интернет</NavLink>
                        <NavLink to="/video-monitoring">Видеонаблюдение</NavLink>
                        <NavLink to="/main-iptv-proekt">Проектирование</NavLink>
                        <NavLink  to="/Installation">Монтаж</NavLink>
                        <NavLink  to="/itequipment">IT оборудование</NavLink>
                        <NavLink  to="/ItDevelopment">IT разработка</NavLink>
                    </div>
                    <div className="col-md-3 col-sm-6 ">
                        <h4  className="font-family-medium">О компании</h4>
                        <a href="#company">О нас</a>
                        <a href="#news">Новости</a>
                        <a href="#services">Услуги</a>
                        <Link  to="/contact">Контакты</Link>
                    </div>
                    <div className="col-md-3 col-sm-6 ">
                        <h4  className="font-family-medium">Локация</h4>
                        <p>
                            город Ташкент, Шайхантахурский р-н,<br/>
                            ул. Кичик Халка Йули, 2А.


                        </p>
                        <p>
                            info@citynet.uz <br/>
                            +998 71 202 1111
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 eight-right">
                        <h5  className="font-family-medium">Служба поддержки</h5>
                        <p className="text-right">+998 71 202 11 11</p>
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