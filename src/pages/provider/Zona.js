import React from 'react';
import {Link} from "react-router-dom";

const Zona = () => {
    return (
        <div   data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="700"
               data-aos-delay="100"
               className="zona">



            <div className="container">
                <h1 className="font-family-medium">Зона покрытия</h1>
            </div>
            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/icon/internettraffic.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="font-family-medium">Проверьте доступность услуг</h2>

                        <p>Узнайте, какие услуги можно подключить по вашему адресу</p>
                        <div className="third-arrow">
                            <Link to="/mainInternet/traffic"  className="font-family-medium">Перейти <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Zona;