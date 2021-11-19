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
                        <a  target="_blank" href="https://www.instagram.com/citynet.uz/"><img src="/images/icon/iptinstagrm.png" alt=""/></a>
                        <a  target="_blank" href="https://www.facebook.com/CITYNET.uz/?hc_ref=ARQvY-U9sMXimoeLrrjrcRZhIReXVj2uDfNm0M2knofLbzhB2PMLapRiNVQhRoo2T2A&__xts__[0]=68.ARCOqj1RtjhB26acCbqIimU_9Im-iIUzOqPfoAOjJs_b--dxpSKLKsIcI4bkwpw-d3syG5F4Vi1iJ-yWQeAm8CTm-U2pUznBPVWqnhb_Aw1LCS1p3VqH1VSSKwpYf5M0bz-6AQsR1hJLrZGthxqs22PHDOUPsca9NrAC4hmTbR0_QqwBxq3AXL2GNY_VlYdMWvjZzMjNch7U10H-qPkwWo76vtkHBVCAIMGxfh5kVKN1MN54KLvJ-hShdu8WVmIZ17ONxD_TqhJ7id0SF8PCnGohgMBPQBeee8KmfwLCebqYLC50DcDt4_a0gBNIL0pf&__tn__=kC-R"><img src="/images/icon/ipttelegram.png" alt=""/></a>
                        <a target="_blank"  href="https://t.me/citynet_uzb"><img src="/images/icon/iptfacebook.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IptelephonyEight;