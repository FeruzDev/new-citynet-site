import React from 'react';
import Slider from "react-slick";
const Clients = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoPlay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="clients container">


            <h1 className="font-family-medium">Наши клиенты</h1>
            <Slider {...settings}>
                <div className="child">
                    <img src="/images/clients/n1.png" alt=""/>
                </div>


                <div className="child">
                    <img src="/images/clients/n2.png" alt=""/>
                </div>

                <div className="child">
                    <img src="/images/clients/n3.png" alt=""/>
                </div>

                <div className="child">
                    <img src="/images/clients/n4.png" alt=""/>
                </div>


                <div className="child">
                    <img src="/images/clients/n2.png" alt=""/>
                </div>

                <div className="child">
                    <img src="/images/clients/n3.png" alt=""/>
                </div>

                <div className="child">
                    <img src="/images/clients/n4.png" alt=""/>
                </div>



            </Slider>
        </div>
    );
};

export default Clients;