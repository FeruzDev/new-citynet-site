import React from 'react';
import {NavLink} from "react-router-dom";

const DetailsPartOne = () => {
    return (
        <div>
            <div className="monitoring-part-one">

                <div className="container ip-part-one">

                    <div className="row">

                        <div className="col-md-7">
                            <div>
                                <h4 data-aos="fade-up"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="700"

                                    className="font-family-medium">Проектирование
                                </h4>
                                <p data-aos="fade-up"
                                   data-aos-easing="ease-out-cubic"
                                   data-aos-duration="700"
                                   data-aos-delay="400"
                                >«Качественная работа на стадии проектирования – залог наиболее эффективного решения».
                                    Именно под этим лозунгом и работает команда проектировщиков из компании «CityNet».
                                    Мы подбираем оборудование, согласно пожеланиям заказчика, составляем план-схему
                                    помещения и размещения оборудования в нем, схему коммутации оборудования. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="servicesThree" className="container  sub-menu-global ">
                <h2 className="font-family-medium"> Наши услуги</h2>

                <div>


                    <NavLink to="/Installation" activeClassName="sub-menu">Монтаж</NavLink>
                    <NavLink to="/main-iptv-proekt" activeClassName="sub-menu">Проектирование</NavLink>

                </div>
            </div>
        </div>
    );
};

export default DetailsPartOne;