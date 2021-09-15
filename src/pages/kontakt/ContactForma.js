import React from 'react';
import {NavLink} from "react-router-dom";

const ContactForma = () => {
    return (
        <div>
            <div className="Contact-forma position-relative">
                <div className="line999">
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
                <div className="container ">
                    <div className="Contact-forma-child">
                        <div className="row">
                            <div className=" col-md-6 ">
                                <h4>Свяжитесь с нами</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Имя"/>
                                        <input type="text" className="form-control" placeholder="Почта"/>
                                    </div>
                                    <div className="col-md-6">

                                        <input type="text" className="form-control" placeholder="Фамилия"/>
                                        <input type="text" className="form-control" placeholder="Контакный телефон"/>
                                    </div>
                                    <input type="text" className="form-control m-3 text" placeholder="Сообшения"/>
                                    <div className="third-arrow ml-3">
                                        <a href="#!"> <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                           alt=""/>Отправить заявку</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pt-3 pl-5 ">
                                <p>Воспользуйтесь формой слева, чтобы задать ваш вопрос, оставить отзыв или
                                    предложение.</p>
                                <div className="contact-in">
                                    <img src="images/icon/contacctimg1.png" alt=""/>
                                    <a href="#">+99890 71 202 11 11</a>
                                </div>
                                <div className="contact-in">
                                    <img src="images/icon/contactimages2.png" alt=""/>
                                    <a href="#">info@citynet.uz</a>
                                </div>
                                <div className="contact-in">
                                    <img src="images/icon/contactimages3.png" alt=""/>
                                    <a href="#">Узбекистан, 100066, г. Ташкент, Шайхантахурский район,
                                        ул. Кичик халка йули, 2</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=675&amp;height=400&amp;hl=en&amp;q=citynet&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                </div>
            </div>

        </div>
    );
};

export default ContactForma;