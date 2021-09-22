import React from 'react';
import {Link} from "react-router-dom";

const TelephonyCardFour = () => {
    return (
        <div className="telephony-card-four position-relative">
            <div className="telephony-card-four-child telephony-card-four-child container">
                <h4 className="font-family-medium">Новые поступления оборудования</h4>
                <div className="row">

                    <div className="col-md-8 offset-2">
                        <img src="images/icon/Gtfourone.png" alt=""/>

                        <h3>АТС VoIP Auerswald COMfortel 3600  </h3>
                        <div className="line"></div>
                        <p>Дистанция измерения 2 ~ 7 м <br/>
                            4 Мп <br/>
                            Встроенный микрофон <br/>
                            Smart ИК-подсветка до 50 м <br/>
                            Слот для microSD до 256 Гбайт</p>
                    </div>
                    <div className="third-arrow">
                        <Link   to='/itequipment'>Перейти на сайт<img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></Link>
                    </div>
                </div>
            </div>
            <div className="line105">
                <div className="line-insert">
                    <svg width="400" height="52" viewBox="0 0 400 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-560 5.83862L-438.897 5.83863L-400.703 43.101L42.9592 43.1011L62.5996 23.4607L174.6 23.4607L200.095 46.9151L287.985 46.9151" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M287.753 51.2623C290.159 51.2623 292.1 49.3216 292.1 46.915C292.1 44.5085 290.159 42.5677 287.753 42.5677C285.346 42.5677 283.405 44.5085 283.405 46.915C283.405 49.3216 285.346 51.2623 287.753 51.2623Z" fill="#0086E7"/>
                        <g opacity="0.4">
                            <path d="M-248.562 1L-127.459 1.00003L-89.2648 38.2624L148 38.2625L169.6 6.45988L281.599 6.4599L307.094 29.9143L394.984 29.9144" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M394.753 34.2615C397.159 34.2615 399.1 32.3207 399.1 29.9142C399.1 27.5077 397.159 25.5669 394.753 25.5669C392.346 25.5669 390.405 27.5076 390.405 29.9142C390.405 32.3207 392.346 34.2615 394.753 34.2615Z" fill="#0086E7"/>
                        </g>
                    </svg>

                </div>
            </div>
            <div className="line106">
                <div className="line-insert">
                    <svg width="567" height="47" viewBox="0 0 567 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M853.1 1H731.997L693.803 38.2624H454.702L435.062 18.622H262.18L236.685 42.0764H5.11438"
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
        </div>
    );
};

export default TelephonyCardFour;