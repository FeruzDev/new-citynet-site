import React from 'react';

const TvFooter = () => {
    return (
        <div className="tv-footer">

            <div className="line120w">
                <div className="line-insert">
                    <svg width="616" height="101" viewBox="0 0 616 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M853.1 1H731.997L693.803 38.2624H454.702L435.062 18.622H262.18L236.685 42.0764H5.11438"
                              stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path
                            d="M5.3461 46.4237C2.93957 46.4237 0.998837 44.4829 0.998837 42.0764C0.998837 39.6699 2.93957 37.7291 5.3461 37.7291C7.75263 37.7291 9.69336 39.6699 9.69336 42.0764C9.69336 44.4829 7.75263 46.4237 5.3461 46.4237Z"
                            fill="#0086E7"/>
                        <path
                            d="M1118.1 99.4237H996.997L958.803 62.1613H515.14L495.5 81.8017H383.5L358.005 58.3473H270.114"
                            stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path
                            d="M270.346 54C267.94 54 265.999 55.9408 265.999 58.3473C265.999 60.7538 267.94 62.6946 270.346 62.6946C272.753 62.6946 274.693 60.7538 274.693 58.3473C274.693 55.9408 272.753 54 270.346 54Z"
                            fill="#0086E7"/>
                        <g opacity="0.4">
                            <path
                                d="M782.662 42.2625L661.559 42.2624L623.365 5.00003L386.1 5.00001L364.501 36.8026L252.502 36.8026L227.006 13.3482L139.116 13.3482"
                                stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path
                                d="M139.348 9.00094C136.942 9.00094 135.001 10.9417 135.001 13.3482C135.001 15.7547 136.942 17.6955 139.348 17.6955C141.755 17.6955 143.695 15.7547 143.695 13.3482C143.695 10.9417 141.755 9.00094 139.348 9.00094Z"
                                fill="#0086E7"/>

                        </g>
                    </svg>
                </div>
            </div>
            <div className="container tv-footer-child">
                <div className="row">
                    <div className="col-md-5">
                        <img data-aos="fade-up"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="700"

                             src="images/icon/tvfooter.png" alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h4 data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="700"
                            className="font-family-medium">Приятные бонусы при подключении интернета</h4>
                        <p data-aos="fade-up"
                           data-aos-easing="ease-out-cubic"
                           data-aos-duration="700"
                           data-aos-delay="200"
                        >Обеспечение пользователей услугами высококачественного интернета является нашей основной
                            задачей. Но, мы стремимся быть ближе к нашим абонентам и дарим Вам бесплатный доступ к IPTV
                            и доступным каналам при подключении нашего высокоскоростного интернета</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TvFooter;