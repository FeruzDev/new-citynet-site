import React, {Component} from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="ipt-corousel ">

                <div  data-aos="fade-up"

                      data-aos-duration="700"
                      data-aos-easing="ease-in-out"

                      className="container ipt-corousel-child position-relative">
                    <div className="line26">
                        <div className="line-insert">
                            <svg width="55" height="853" viewBox="0 0 55 853" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45.4238 852.1L45.4238 730.997L8.16142 692.803L8.16143 453.702L27.8018 434.062L27.8018 261.18L4.3474 235.685L4.34741 4.11438"
                                    stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path
                                    d="M0.000754399 4.34683C0.000754423 1.9403 1.9415 -0.000431158 4.34803 -0.000431123C6.75456 -0.000431089 8.69531 1.9403 8.69531 4.34683C8.69531 6.75336 6.75456 8.69409 4.34803 8.69409C1.9415 8.69409 0.000754376 6.75336 0.000754399 4.34683Z"
                                    fill="#0086E7"/>
                                <g opacity="0.4">
                                    <path
                                        d="M53.2617 741.661L53.2617 620.558L15.9993 582.364L15.9993 345.099L47.8019 323.5L47.8019 211.501L24.3475 186.005L24.3475 98.1152"
                                        stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                                    <path
                                        d="M20.0008 98.3476C20.0008 95.941 21.9415 94.0003 24.348 94.0003C26.7546 94.0003 28.6953 95.941 28.6953 98.3476C28.6953 100.754 26.7546 102.695 24.348 102.695C21.9415 102.695 20.0008 100.754 20.0008 98.3476Z"
                                        fill="#0086E7"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="line27">
                        <div className="line-insert">
                            <svg width="47" height="853" viewBox="0 0 47 853" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0L1.00001 121.103L38.2624 159.297L38.2624 398.397L18.622 418.038L18.622 590.92L42.0765 616.415L42.0765 847.985" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path d="M46.4231 847.753C46.4231 850.159 44.4823 852.1 42.0758 852.1C39.6693 852.1 37.7285 850.159 37.7285 847.753C37.7285 845.346 39.6693 843.405 42.0758 843.405C44.4823 843.405 46.4231 845.346 46.4231 847.753Z" fill="#0086E7"/>
                                <g opacity="0.4">
                                    <path d="M42.2637 70.4395L42.2637 191.542L5.00126 229.736L5.00125 467.001L36.8039 488.601L36.8039 600.6L13.3494 626.095L13.3494 713.985" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                                    <path d="M9.00271 713.753C9.00271 716.16 10.9434 718.1 13.35 718.1C15.7565 718.1 17.6973 716.16 17.6973 713.753C17.6973 711.346 15.7565 709.406 13.35 709.406C10.9435 709.406 9.00271 711.346 9.00271 713.753Z" fill="#0086E7"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <img src="images/s1.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="images/s2.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="images/s3.jpg" alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}