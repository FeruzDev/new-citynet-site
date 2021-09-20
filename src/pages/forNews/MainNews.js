import React from 'react';
import {Link} from "react-router-dom";

const MainNews = () => {
    return (
        <div className="main-news">
            <div className="container">
                <div className="news-main-title">

                    <h2>
                        Ещё новости
                    </h2>
                    <Link to="/all-news">Все новости</Link>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src="/images/e3.png" alt=""/>

                        <h3>CityNet предлагает решения в области IT</h3>
                        <p>Компания CityNet предоставит современное и эффективное решение в IT-сфере, а также
                            разработает и внедрит его с учетом специфики проекта.</p>
                    </div>


                    <div className="col-md-4">
                        <img src="/images/e2.png" alt=""/>

                        <h3>Cервисный робот для бизнеса — Promobot V4</h3>
                        <p>Компания CityNet представляет сервисный робот для бизнеса — Promobot V4.</p>
                    </div>


                    <div className="col-md-4">
                        <img src="/images/e1.png" alt=""/>

                        <h3>Системы контроля и управления доступом (СКУД)</h3>
                        <p>СКУД предназначена для автоматического гибкого управления доступом людей в здания и помещения
                            организации, въездом и выездом автотранспорта на охраняемую территорию</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MainNews;