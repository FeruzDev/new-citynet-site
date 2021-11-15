import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IpTelephonyTwo = () => {
    AOS.init();
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            <div className="iptelephony-part-two position-relative">

                <div className="line99">
                    <div className="line-insert">
                        <svg width="567" height="47" viewBox="0 0 567 47" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M853.1 1H731.997L693.803 38.2624H454.702L435.062 18.622H262.18L236.685 42.0764H5.11438"
                                stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                            <path
                                d="M5.3461 46.4236C2.93957 46.4236 0.998837 44.4828 0.998837 42.0763C0.998837 39.6698 2.93957 37.729 5.3461 37.729C7.75263 37.729 9.69336 39.6698 9.69336 42.0763C9.69336 44.4828 7.75263 46.4236 5.3461 46.4236Z"
                                fill="#0086E7"></path>
                            <g opacity="0.4">
                                <path
                                    d="M782.66 42.2625L661.557 42.2624L623.363 5.00003L386.098 5.00001L364.499 36.8026L252.5 36.8026L227.005 13.3482L139.114 13.3482"
                                    stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                                <path
                                    d="M139.346 9.001C136.94 9.001 134.999 10.9417 134.999 13.3483C134.999 15.7548 136.94 17.6956 139.346 17.6956C141.753 17.6956 143.693 15.7548 143.693 13.3483C143.693 10.9417 141.753 9.001 139.346 9.001Z"
                                    fill="#0086E7"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="container iptelephony-part-two-child" id="company">

                    <div className="row" >
                        <div className="col-md-6">
                            <img src="images/icon/iptelephonytwo.png" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4 id="hh" className="font-family-medium">О компании</h4>
                            <p>Компания «CityNet IT Engineering» является дистрибьютором интеллектуальных технологий и
                                систем безопасности от ведущих производителей мира, а также представляет комплексные
                                решения любого масштаба.
                                На сегодняшний день мы являемся одним из лидеров в области IT технологий в Узбекистане.
                                Многолетний опыт работы позволяет предоставлять заказчикам наиболее выгодные и гибкие
                                условия сотрудничества

                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default IpTelephonyTwo;