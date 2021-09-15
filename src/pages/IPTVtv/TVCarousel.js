import React, { Component } from "react";
import Slider from "react-slick";

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
            <div className="container tv-carousel">
                <Slider {...settings}>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                    <div><div className="box"></div></div>
                </Slider>
            </div>
        );
    }
}