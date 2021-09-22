import React from 'react';
import Slider from "react-slick";

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


                        <h1>
                            «CityNet» - универсальный оператор связи для бизнеса </h1>
                        <p>
                            Компания помогает оперативно провести Интернет сетевым и государственным компаниям,
                            индивидуальным предпринимателям и частным лицам.
                        </p>
                        <div className="third-arrow">
                            <a href="#!">Перейти <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                        alt=""/></a>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/bannercarousel.png" alt=""/>


                </div>


                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1>
                            «CityNet» - универсальный оператор связи для бизнеса </h1>
                        <p>
                            Компания помогает оперативно провести Интернет сетевым и государственным компаниям,
                            индивидуальным предпринимателям и частным лицам.
                        </p>
                        <div className="third-arrow">
                            <a href="#!">Перейти <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                      alt=""/></a>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/bannercarousel.png" alt=""/>


                </div>

                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1>
                            «CityNet» - универсальный оператор связи для бизнеса </h1>
                        <p>
                            Компания помогает оперативно провести Интернет сетевым и государственным компаниям,
                            индивидуальным предпринимателям и частным лицам.
                        </p>
                        <div className="third-arrow">
                            <a href="#!">Перейти <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                      alt=""/></a>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/bannercarousel.png" alt=""/>


                </div>

                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1>
                            «CityNet» - универсальный оператор связи для бизнеса </h1>
                        <p>
                            Компания помогает оперативно провести Интернет сетевым и государственным компаниям,
                            индивидуальным предпринимателям и частным лицам.
                        </p>
                        <div className="third-arrow">
                            <a href="#!">Перейти <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                      alt=""/></a>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/bannercarousel.png" alt=""/>


                </div>


            </Slider>


            <div className="for-call-center">

                <h3>
                    Связить с нами
                </h3>

                <img src="/images/callCentr.png" alt=""/>
            </div>
        </div>

    );
};

export default BannerCarousel;