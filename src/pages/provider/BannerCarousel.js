import React from 'react';
import Slider from "react-slick";
import {Link, NavLink} from "react-router-dom";

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
                        <h1 >
                            «CityNet» - универсальный оператор связи для бизнеса </h1>
                        <p >
                            Компания помогает оперативно провести Интернет сетевым и государственным компаниям,
                            индивидуальным предпринимателям и частным лицам.
                        </p>
                    </div>
                    <img className="banner-carousel-img-item" src="/images/bannercarousel.png" alt=""/>
                </div>
                <div className="carousel-item-img">
                    <div className="row banner-title">
                        <h1>
                            Предложения для юрических лиц</h1>
                        <p>
                            «CityNet» - новейший Интернет-провайдер на рынке услуг связи Узбекистана. Уже сегодня мы
                            предлагаем бизнес решения для компаний любого масштаба, ведь нашей отличительной
                            особенностью является профессиональный и индивидуальный подход к каждому абоненту. Мы
                            гарантируем, что за короткий промежуток времени мы завоюем «сердца» многих абонентов и
                            станем одним из конкурентоспособных лидеров в сфере интернет-услуг
                        </p>
                    </div>
                    <img className="banner-carousel-img-item" src="/images/ban3.jpg" alt=""/>
                </div>
                <div className="carousel-item-img">
                    <div className="row banner-title">
                        <h1>
                            IP-телефония </h1>
                        <p>
                            Система IP телефонии — это, прежде всего гибкий инструмент для обеспечения высокой
                            доступности каждого сотрудника компании. Быстрота и легкость модернизации, увеличения
                            производительной мощности, основные важнейшие свойства нашего решения.
                        </p>
                    </div>
                    <img className="banner-carousel-img-item" src="/images/ban2.jpg" alt=""/>
                </div>
                <div className="carousel-item-img">
                    <div className="row banner-title">
                        <h1>
                            IPTV</h1>
                        <p>
                            IPTV (Internet Protocol Television) – это современная технология, позволяющая эффективно
                            передавать телевизионный сигнал через сеть Интернет. IPTV – это полностью интерактивный
                            сервис, работающий через интернет, в отличие от кабельного или спутникового телевидения.
                        </p>
                    </div>
                    <img className="banner-carousel-img-item" src="/images/ban4.jpg" alt=""/>
                </div>
            </Slider>
            <div className="for-call-center">
                <h3>
                    Связить с нами
                </h3>
                <NavLink to="/contact"  >   <img src="/images/icon/sv.png" alt=""/></NavLink>
            </div>
        </div>

    );
};

export default BannerCarousel;