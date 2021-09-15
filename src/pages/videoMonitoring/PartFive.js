import React from 'react';
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

const PartFive = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5 ,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.2,
                    centerMode:true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1009,
                settings: {
                    slidesToShow: 2.15,
                    centerMode:true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1.7,
                    centerMode:true,
                    slidesToScroll: 1
                }
            },

]
        //     afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }

    }

    return (
        <div className="provider container">

            <h1>Популярные</h1>
            <Slider {...settings}>
                <div className="popular">
                    <div className="popular-child">
                        <div className="card-body">
                            <img src="images/icon/stock .png" alt=""/>
                            <span><img src="images/icon/itcPartone.png" alt=""/></span>
                            <h4>IP Аудио</h4>
                            <p>ITC Audio T-6708 Сетевой аудио адаптер,</p>
                            <del>3 703 197 сум</del>
                            <h3>3 703 197 сум</h3>
                            <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment"><button type="button" className="btn btn-primary">Подробнее</button></NavLink></div>
                        </div>
                    </div>
                </div>
                <div className='popular'>
                    <div className="popular-child">
                        <div className="card-body">
                            <img src="images/icon/stock .png" alt=""/>
                            <span><img src="images/icon/itcpartwo.png" alt=""/></span>
                            <h4>IP Аудио</h4>
                            <p>ITC Audio T-6708 Сетевой аудио адаптер,</p>
                            <del>3 703 197 сум</del>
                            <h3>3 703 197 сум</h3>
                            <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment"><button type="button" className="btn btn-primary">Подробнее</button></NavLink></div>
                        </div>
                    </div>
                </div>
                <div className='popular'>
                    <div className="popular-child">
                        <div className="card-body">
                            <img src="images/icon/stock .png" alt=""/>
                            <span><img src="images/icon/itcpartree.png" alt=""/></span>
                            <h4>IP Аудио</h4>
                            <p>ITC Audio T-6708 Сетевой аудио адаптер,</p>
                            <del>3 703 197 сум</del>
                            <h3>3 703 197 сум</h3>
                            <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment"><button type="button" className="btn btn-primary">Подробнее</button></NavLink></div>
                        </div>
                    </div>
                </div>
                <div className='popular'>
                    <div className="popular-child">
                        <div className="card-body">
                            <img src="images/icon/stock .png" alt=""/>
                            <span><img src="images/icon/itcpartfour.png" alt=""/></span>
                            <h4>IP Аудио</h4>
                            <p>ITC Audio T-6708 Сетевой аудио адаптер,</p>
                            <del>3 703 197 сум</del>
                            <h3>3 703 197 сум</h3>
                            <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment"><button type="button" className="btn btn-primary">Подробнее</button></NavLink></div>
                        </div>
                    </div>
                </div>
                <div className='popular'>
                    <div className="popular-child">
                        <div className="card-body">
                            <img src="images/icon/stock .png" alt=""/>
                            <span><img src="images/icon/itcPartone.png" alt=""/></span>
                            <h4>IP Аудио</h4>
                            <p>ITC Audio T-6708 Сетевой аудио адаптер,</p>
                            <del>3 703 197 сум</del>
                            <h3>3 703 197 сум</h3>
                            <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment"><button type="button" className="btn btn-primary">Подробнее</button></NavLink></div>
                        </div>
                    </div>
                </div>
                <div className='popular'>
                    <div className="popular-child">
                        <div className="card-body">
                            <img src="images/icon/stock .png" alt=""/>
                            <span><img src="images/icon/itcpartwo.png" alt=""/></span>
                            <h4>IP Аудио</h4>
                            <p>ITC Audio T-6708 Сетевой аудио адаптер,</p>
                            <del>3 703 197 сум</del>
                            <h3>3 703 197 сум</h3>
                            <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment"><button type="button" className="btn btn-primary">Подробнее</button></NavLink></div>
                        </div>
                    </div>
                </div>
                <div className='popular'>
                    <div className="popular-child">
                        <div className="card-body">
                            <img src="images/icon/stock .png" alt=""/>
                            <span><img src="images/icon/itcpartree.png" alt=""/></span>
                            <h4>IP Аудио</h4>
                            <p>ITC Audio T-6708 Сетевой аудио адаптер,</p>
                            <del>3 703 197 сум</del>
                            <h3>3 703 197 сум</h3>
                            <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment"><button type="button" className="btn btn-primary">Подробнее</button></NavLink></div>
                        </div>
                    </div>
                </div>
                <div className='popular'>
                    <div className="popular-child">
                        <div className="card-body">
                            <img src="images/icon/stock .png" alt=""/>
                            <span><img src="images/icon/itcpartfour.png" alt=""/></span>
                            <h4>IP Аудио</h4>
                            <p>ITC Audio T-6708 Сетевой аудио адаптер,</p>
                            <del>3 703 197 сум</del>
                            <h3>3 703 197 сум</h3>
                            <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment"><button type="button" className="btn btn-primary">Подробнее</button></NavLink></div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default PartFive;