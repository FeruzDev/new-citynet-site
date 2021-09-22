import React from 'react';
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

const EquipmentNew = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4.94,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: "unslick"
            }

        ]
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }

    }
    return (
        <div>
            <div className="provider container">

                <h1>Новинки</h1>
                <Slider {...settings}>
                    <div className="popular">
                        <div className="popular-child">
                            <div className="card-body">
                                <img src="images/icon/stock .png" alt=""/>
                                <span><img src="images/icon/itcPartone.png" alt=""/></span>
                                <h4>IP Аудио</h4>
                                <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                    x
                                </p>

                                <h3  className="font-family-medium"><del></del><br/>3 703 197 сум</h3>
                                <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                    <button type="button" className="btn btn-primary font-family-medium">Подробнее</button>
                                </NavLink></div>                            </div>
                        </div>
                    </div>
                    <div className='popular'>
                        <div className="popular-child">
                            <div className="card-body">
                                <img src="images/icon/stock .png" alt=""/>
                                <span><img src="images/icon/itcpartwo.png" alt=""/></span>
                                <h4>IP Аудио</h4>
                                <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                    x
                                </p>

                                <h3  className="font-family-medium"><del>3 703 197 сум</del><br/>3 703 197 сум</h3>
                                <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                    <button type="button" className="btn btn-primary font-family-medium">Подробнее</button>
                                </NavLink></div>                            </div>
                        </div>
                    </div>
                    <div className='popular'>
                        <div className="popular-child">
                            <div className="card-body">
                                <img src="images/icon/stock .png" alt=""/>
                                <span><img src="images/icon/itcpartree.png" alt=""/></span>
                                <h4>IP Аудио</h4>
                                <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                    x
                                </p>

                                <h3  className="font-family-medium" ><del></del><br/>3 703 197 сум</h3>
                                <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                    <button type="button" className="btn btn-primary font-family-medium">Подробнее</button>
                                </NavLink></div>                            </div>
                        </div>
                    </div>
                    <div className='popular'>
                        <div className="popular-child">
                            <div className="card-body">
                                <img src="images/icon/stock .png" alt=""/>
                                <span><img src="images/icon/itcpartfour.png" alt=""/></span>
                                <h4>IP Аудио</h4>
                                <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                    x
                                </p>

                                <h3  className="font-family-medium"><del></del><br/>3 703 197 сум</h3>
                                <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                    <button type="button" className="btn btn-primary font-family-medium">Подробнее</button>
                                </NavLink></div>                            </div>
                        </div>
                    </div>
                    <div className="popular">
                        <div className="popular-child">
                            <div className="card-body">
                                <img src="images/icon/stock .png" alt=""/>
                                <span><img src="images/icon/itcPartone.png" alt=""/></span>
                                <h4>IP Аудио</h4>
                                <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                    x
                                </p>

                                <h3  className="font-family-medium"><del></del><br/>3 703 197 сум</h3>
                                <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                    <button type="button" className="btn btn-primary font-family-medium">Подробнее</button>
                                </NavLink></div>                            </div>
                        </div>
                    </div>
                    <div className="popular">
                        <div className="popular-child">
                            <div className="card-body">
                                <img src="images/icon/stock .png" alt=""/>
                                <span><img src="images/icon/itcPartone.png" alt=""/></span>
                                <h4>IP Аудио</h4>
                                <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                    x
                                </p>

                                <h3  className="font-family-medium"><del></del><br/>3 703 197 сум</h3>
                                <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                    <button type="button" className="btn btn-primary font-family-medium">Подробнее</button>
                                </NavLink></div>                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default EquipmentNew;