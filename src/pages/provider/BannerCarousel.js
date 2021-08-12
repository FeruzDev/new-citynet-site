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
        <div className='banner-carousel'>
            <Slider {...settings}>
                 <div className="carousel-item-img">




                     <div className="row banner-title">


                             <h1>
                                 Интернет выдержит <br/>
                                 любые нагрузки
                             </h1>
                             <div className="third-arrow">
                                 <a href="#!">Подробнее <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                             </div>


                     </div>
                     <img className="banner-carousel-img-item" src="/images/bannercarousel.png" alt=""/>


                 </div>



                <div className="carousel-item-img">




                    <div className="row banner-title">


                        <h1>
                            Интернет выдержит <br/>
                            любые нагрузки
                        </h1>
                        <div className="third-arrow">
                            <a href="#!">Подробнее <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/bannercarousel.png" alt=""/>


                </div>


                <div className="carousel-item-img">




                    <div className="row banner-title">


                        <h1>
                            Интернет выдержит <br/>
                            любые нагрузки
                        </h1>
                        <div className="third-arrow">
                            <a href="#!">Подробнее <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                        </div>


                    </div>
                    <img className="banner-carousel-img-item" src="/images/bannercarousel.png" alt=""/>


                </div>



                <div className="carousel-item-img">




                    <div className="row banner-title">


                        <h1>
                            Интернет выдержит <br/>
                            любые нагрузки
                        </h1>
                        <div className="third-arrow">
                            <a href="#!">Подробнее <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
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