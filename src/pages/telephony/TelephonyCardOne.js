import React from 'react';
import {Link} from "react-router-dom";

const TelephonyCardOne = () => {
    return (
        <div className="telephony-card-one position-relative">

                <div
                     className="container telephony-card-one-child">

                    <div className="row">

                        <div className="col-md-8">
                            <div>
                            <h4 data-aos="fade-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="700"   className='font-family-medium'>IP телефония</h4>
                            <p data-aos="fade-up"
                               data-aos-easing="ease-out-cubic"
                               data-aos-duration="700"
                            >
                                Система IP телефонии — это, прежде всего гибкий инструмент для обеспечения высокой доступности каждого сотрудника компании. Быстрота и легкость
                                модернизации, увеличения производительной мощности, основные важнейшие свойства нашего решения. </p>
                                <div data-aos="fade-up"
                                     data-aos-easing="ease-out-cubic"
                                     data-aos-duration="700"
                                     className="third-arrow">
                                    <Link to="/form"  >Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></Link>
                                </div>
                            </div>
                        </div>


                </div>

            </div>
        </div>
    );
};

export default TelephonyCardOne;