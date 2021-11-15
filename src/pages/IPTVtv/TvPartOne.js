import React from 'react';
import {Link} from "react-router-dom";

const TvPartOne = () => {
    return (
        <div className="tv-part-one">

            <div className="container tv-part-one-child">

                <div className="row">

                    <div className="col-md-6">
                        <div>
                            <h4 data-aos="fade-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="700"
                                className='font-family-medium'>Специальное предложение для абонентов</h4>
                            <p data-aos="fade-up"
                               data-aos-easing="ease-out-cubic"
                               data-aos-duration="700"
                               data-aos-delay="200"
                            >
                                Подключение IPTV на особых условиях </p>
                            <div  data-aos="fade-up"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-duration="700"
                                  data-aos-delay="400"
                                  className="third-arrow">
                                <Link to="/form"  className='font-family-medium'>Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></Link>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default TvPartOne;