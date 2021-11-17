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


                        <h1>
                            Системы видеонаблюдения
                        </h1>
                        <p>Видеонаблюдение – это система, включающая в себя сочетание оборудования и программного
                            обеспечения, предназначенного для визуального контроля за территорией, действиями и
                            ситуацией. </p>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/icon/bannerc.png" alt=""/>


                </div>
                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1>
                            IP-Домофония
                        </h1>
                        <p>В современном мире никого не удивишь цветным видео домофоном или
                            многоквартирным аудио домофоном. Но прогресс не стоит на месте и на замену аудио и видео
                            домофонам пришли IP домофоны, которые отличаются своей высокой функциональностью и
                            технологичностью. </p>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/domofon.jpg" alt=""/>

                </div>
                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1>
                            Системы контроля и управления доступом (СКУД)
                        </h1>
                        <p>Система контроля и управления доступом предназначена для автоматического управления гибким
                            контролем доступа людей в здания и помещения организации, въездом и выездом автотранспорта
                            на охраняемую территорию.</p>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/skud.jpg" alt=""/>

                </div>
                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1>
                            Роботы для бизнеса
                        </h1>
                        <p>Робототехника не только продолжает развиваться на крупных предприятиях, но и уверенно
                            продвигается в область среднего и малого бизнеса.
                            Они выполняют работу эффективнее, надежнее и за меньшие деньги. </p>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/robo.jpg" alt=""/>

                </div>
            </Slider>
        </div>

    );
};

export default BannerCarousel;