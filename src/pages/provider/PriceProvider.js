import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";



const PriceProvider = () => {


    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        centerMode:true,
        slidesToShow:4.2,
        swipeToSlide: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: "unslick"
            }

        ]
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }

    }


    return (
        <div className="position-relative">
            <div className="line56">
                <div className="line-insert">
                    <svg width="704" height="101" viewBox="0 0 704 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M853.1 1H731.997L693.803 38.2624H454.702L435.062 18.622H262.18L236.685 42.0764H5.11438"
                              stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                        <path
                            d="M5.3461 46.4236C2.93957 46.4236 0.998837 44.4828 0.998837 42.0763C0.998837 39.6698 2.93957 37.729 5.3461 37.729C7.75263 37.729 9.69336 39.6698 9.69336 42.0763C9.69336 44.4828 7.75263 46.4236 5.3461 46.4236Z"
                            fill="#0086E7"></path>
                        <path
                            d="M1118.1 99.4238H996.997L958.803 62.1614H515.14L495.5 81.8018H383.5L358.005 58.3474H270.114"
                            stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                        <path
                            d="M270.346 54.0003C267.94 54.0003 265.999 55.941 265.999 58.3475C265.999 60.7541 267.94 62.6948 270.346 62.6948C272.753 62.6948 274.693 60.7541 274.693 58.3475C274.693 55.941 272.753 54.0003 270.346 54.0003Z"
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

        <div className="price-provider container">
            <h1 className="font-family-medium">Тарифный планы</h1>
            <div className="provider-opacity"></div>
            <Slider {...settings}>









                <div className='price-item'>
                    <div className="price-item-child">
                        <h2 className="font-family-medium">OPTIMUM</h2>
                        <div className='speed-list'>
                            <div><img src="/images/icon/speed.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">10 Мб/с</span>
                                <span>Скорость </span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <div> <img src="/images/icon/tas.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">100 Мб/с</span>
                                <span>TAS-IX</span>
                            </h3>
                        </div>




                        <h1  className="font-family-medium">
                            115 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>


                        <div className="sale">
                            <h4>103 500 Сум</h4>
                            <span>6 месяцев скидка 10%</span>
                        </div>
                        <div className="sale">
                            <h4>92 000 Сум</h4>
                            <span>1 год скидка 10%</span>

                        </div>
                        <div className="third-arrow">
                            <Link to="/form"  className="font-family-medium">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></Link>
                        </div>
                    </div>
                </div>




                <div className='price-item'>
                    <div className="price-item-child">
                        <h2 className="font-family-medium">EXCLUSIVE</h2>
                        <div className='speed-list'>
                            <div><img src="/images/icon/speed.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">30 Мб/с</span>
                                <span>Скорость </span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <div> <img src="/images/icon/tas.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">100 Мб/с</span>
                                <span>TAS-IX</span>
                            </h3>
                        </div>




                        <h1  className="font-family-medium">
                            195 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>


                        <div className="sale">
                            <h4>175 500 Сум</h4>
                            <span>6 месяцев скидка 10%</span>
                        </div>
                        <div className="sale">
                            <h4>156 000 Сум</h4>
                            <span>1 год скидка 10%</span>

                        </div>
                        <div className="third-arrow">
                            <Link to="/form"  className="font-family-medium">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></Link>
                        </div>
                    </div>
                </div>


                <div className='price-item'>
                    <div className="price-item-child">
                        <h2 className="font-family-medium">PREMIUM</h2>
                        <div className='speed-list'>
                            <div><img src="/images/icon/speed.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">30 Мб/с</span>
                                <span>Скорость </span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <div> <img src="/images/icon/tas.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">100 Мб/с</span>
                                <span>TAS-IX</span>
                            </h3>
                        </div>




                        <h1  className="font-family-medium">
                            249 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>


                        <div className="sale">
                            <h4>224 100 Сум</h4>
                            <span>6 месяцев скидка 10%</span>
                        </div>
                        <div className="sale">
                            <h4>199 200 Сум</h4>
                            <span>1 год скидка 10%</span>

                        </div>
                        <div className="third-arrow">
                            <Link to="/form"  className="font-family-medium">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></Link>
                        </div>
                    </div>
                </div>







                <div className='price-item'>
                    <div className="price-item-child">
                        <h2 className="font-family-medium">NEXT</h2>
                        <div className='speed-list'>
                            <div><img src="/images/icon/speed.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">6 Мб/с</span>
                                <span>Скорость </span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <div> <img src="/images/icon/tas.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">100 Мб/с</span>
                                <span>TAS-IX</span>
                            </h3>
                        </div>




                        <h1  className="font-family-medium">
                             95 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>


                        <div className="sale">
                            <h4>85 500 Сум</h4>
                            <span>6 месяцев скидка 10%</span>
                        </div>
                        <div className="sale">
                            <h4>76 000 Сум</h4>
                            <span>1 год скидка 10%</span>

                        </div>
                        <div className="third-arrow">
                            <Link to="/form"  className="font-family-medium">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></Link>
                        </div>
                    </div>
                </div>




                <div className='price-item'>
                    <div className="price-item-child">
                        <h2 className="font-family-medium">COMFORT</h2>
                        <div className='speed-list'>
                            <div><img src="/images/icon/speed.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">20 Мб/с</span>
                                <span>Скорость </span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <div> <img src="/images/icon/tas.png" alt=""/></div>
                            <h3>
                                <span className="font-family-medium">100 Мб/с</span>
                                <span>TAS-IX</span>
                            </h3>
                        </div>




                        <h1  className="font-family-medium">
                            145 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>


                        <div className="sale">
                            <h4>130 500 Сум</h4>
                            <span>6 месяцев скидка 10%</span>
                        </div>
                        <div className="sale">
                            <h4>116 000 Сум</h4>
                            <span>1 год скидка 10%</span>

                        </div>
                        <div className="third-arrow">
                            <Link to="/form"  className="font-family-medium">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></Link>
                        </div>
                    </div>
                </div>




            </Slider>

        </div>
            <div className="line59">
                <div className="line-insert">
                    <svg width="482" height="58" viewBox="0 0 482 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M984.1 56.4237H862.997L824.803 19.1613H381.14L361.5 38.8017H249.5L224.005 15.3473H136.114" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M136.346 11C133.94 11 131.999 12.9408 131.999 15.3473C131.999 17.7538 133.94 19.6946 136.346 19.6946C138.753 19.6946 140.693 17.7538 140.693 15.3473C140.693 12.9408 138.753 11 136.346 11Z" fill="#0086E7"/>
                        <g opacity="0.4">
                            <path d="M648.66 38.2625L527.557 38.2624L489.363 1.00003L252.098 1.00001L230.499 32.8026L118.5 32.8026L93.0045 9.3482L5.11426 9.3482" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M5.3461 5.001C2.93957 5.001 0.998837 6.94174 0.998837 9.34827C0.998837 11.7548 2.93957 13.6956 5.3461 13.6956C7.75263 13.6956 9.69336 11.7548 9.69336 9.34827C9.69336 6.94174 7.75263 5.001 5.3461 5.001Z" fill="#0086E7"/>
                        </g>
                    </svg>


                </div>
            </div>

        </div>
    );
};

export default PriceProvider;