import React from 'react';
import Slider from "react-slick";
import {NavLink} from "react-router-dom";


const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return (
        <div className='banner-carousel container'>
            <Slider {...settings}>
                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1  className="font-family-medium">
                            Системы видеонаблюдения
                        </h1>
                        <p>Видеонаблюдение – это система, включающая в себя сочетание оборудования и программного
                            обеспечения, предназначенного для визуального контроля за территорией, действиями и
                            ситуацией. </p>
                        <div className="third-arrow">
                            <NavLink  className="font-family-medium" to="/equipment">Подробнее <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                    alt=""/></NavLink>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/icon/bannerc.png" alt=""/>


                </div>
                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1>
                            Системы видеонаблюдения
                        </h1>
                        <p>Видеонаблюдение – это система, включающая в себя сочетание оборудования и программного
                            обеспечения, предназначенного для визуального контроля за территорией, действиями и
                            ситуацией. </p>
                        <div className="third-arrow">
                            <NavLink to="/equipment">Подробнее <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                    alt=""/></NavLink>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/icon/bannerc.png" alt=""/>

                </div>
                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1>
                            Системы видеонаблюдения
                        </h1>
                        <p>Видеонаблюдение – это система, включающая в себя сочетание оборудования и программного
                            обеспечения, предназначенного для визуального контроля за территорией, действиями и
                            ситуацией. </p>
                        <div className="third-arrow">
                            <NavLink to="/equipment">Подробнее <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                    alt=""/></NavLink>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/icon/bannerc.png" alt=""/>

                </div>
                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1>
                            Системы видеонаблюдения
                        </h1>
                        <p>Видеонаблюдение – это система, включающая в себя сочетание оборудования и программного
                            обеспечения, предназначенного для визуального контроля за территорией, действиями и
                            ситуацией. </p>
                        <div className="third-arrow">
                            <NavLink to="/equipment">Подробнее <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                    alt=""/></NavLink>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/icon/bannerc.png" alt=""/>

                </div>
            </Slider>
        </div>

    );
};

export default BannerCarousel;