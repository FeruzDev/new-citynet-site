import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5.5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
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
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },

            ]
        };
        return (
            <div className="  tv-carousel">

                <div className="container">
                    <Slider {...settings}>
                        <div><div className="box"><img src="/images/channels/t1.png" alt=""/></div></div>
                        <div><div className="box"><img src="/images/channels/t2.png" alt=""/></div></div>
                        <div><div className="box"><img src="/images/channels/t3.png" alt=""/></div></div>
                        <div><div className="box"><img src="/images/channels/t4.png" alt=""/></div></div>
                        <div><div className="box"><img src="/images/channels/t5.png" alt=""/></div></div>
                        <div><div className="box"><img src="/images/channels/t6.png" alt=""/></div></div>
                        <div><div className="box"><img src="/images/channels/t7.png" alt=""/></div></div>
                        <div><div className="box"><img src="/images/channels/t8.png" alt=""/></div></div>
                        <div><div className="box"><img src="/images/channels/t9.png" alt=""/></div></div>
                        <div><div className="box"><img src="/images/channels/t10.png" alt=""/></div></div>

                    </Slider>


                    <Link to="/maintv/all-channels">Посмотреть все каналы</Link>


                </div>
                <div className="line120w3">
                    <div className="line-insert">
                        <svg width="809" height="97" viewBox="0 0 809 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-43.4395 95.2627L77.6634 95.2627L115.857 58.0003L354.958 58.0003L374.598 77.6407L547.48 77.6407L572.975 54.1863L804.546 54.1863" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M804.314 49.8391C806.721 49.8391 808.661 51.7799 808.661 54.1864C808.661 56.5929 806.721 58.5337 804.314 58.5337C801.908 58.5337 799.967 56.5929 799.967 54.1864C799.967 51.7799 801.908 49.8391 804.314 49.8391Z" fill="#0086E7"/>
                            <g opacity="0.4">
                                <path d="M-159 1L-37.8972 1.00003L0.296763 38.2624L237.562 38.2625L259.161 6.45987L371.16 6.45989L396.656 29.9143L484.546 29.9143" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path d="M484.314 34.2615C486.721 34.2615 488.661 32.3207 488.661 29.9142C488.661 27.5077 486.721 25.5669 484.314 25.5669C481.908 25.5669 479.967 27.5076 479.967 29.9142C479.967 32.3207 481.908 34.2615 484.314 34.2615Z" fill="#0086E7"/>
                            </g>
                        </svg>
                    </div>
                </div>



            </div>
        );
    }
}