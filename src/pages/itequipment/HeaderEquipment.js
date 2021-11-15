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


                        <h1 data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="700"

                            className="font-family-medium">
                            Системы видеонаблюдения
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="700"
                            data-aos-delay="200"
                        >Видеонаблюдение – это система, включающая в себя сочетание оборудования и программного
                            обеспечения, предназначенного для визуального контроля за территорией, действиями и
                            ситуацией. </p>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/icon/bannerc.png" alt=""/>


                </div>
                <div className="carousel-item-img">


                    <div className="row banner-title">


                        <h1 data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="700"
                             >
                            Системы видеонаблюдения
                        </h1>
                        <p data-aos="fade-up"
                           data-aos-easing="ease-out-cubic"
                           data-aos-duration="700"
                           data-aos-delay="200">Видеонаблюдение – это система, включающая в себя сочетание оборудования и программного
                            обеспечения, предназначенного для визуального контроля за территорией, действиями и
                            ситуацией. </p>


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



                    </div>
                    <img className="banner-carousel-img-item" src="/images/icon/bannerc.png" alt=""/>

                </div>
            </Slider>
        </div>

    );
};

export default BannerCarousel;