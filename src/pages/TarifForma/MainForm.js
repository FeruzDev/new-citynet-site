import React from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import {NavLink} from "react-router-dom";
import DisplayNavbar from "../navbar/DisplayNavbar";

const MainForm = () => {
    return (
        <div>
            <NavbarGeneral/>
            <DisplayNavbar/>
            <div className="main-form">
                <div className="container ">
                    <div className="main-form-child">
                        <div className="row">
                            <div className=" col-md-6  ">
                                <h4 className="font-family-medium">Заявка на подключение</h4>
                                <p>Заполните заявку и наши специалисты свяжутся с Вами в течение 24 часов!</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>Toshkent</option>
                                                <option>Navoi</option>
                                                <option>Andijon</option>
                                                <option>Farg'ona</option>
                                                <option>Namangan</option>
                                                <option>Qashqadaryo</option>
                                                <option>Surxandaryo</option>
                                                <option>Jizzax</option>
                                                <option>Sirdaryo</option>
                                                <option>Buxoro</option>

                                            </select>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Улица"/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>Yunisabod</option>
                                                <option>Mirzo Ulug'bek</option>
                                                <option>Olmazor</option>
                                                <option>Yakkasaroy</option>
                                                <option>Shayxontphur</option>
                                                <option>Yashnobod</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6"><input type="number" className="form-control"
                                                                             placeholder="Подезд"/></div>
                                            <div className="col-md-6"><input type="number" className="form-control"
                                                                             placeholder="Квартира"/></div>
                                        </div>

                                    </div>
                                    <input type="text" className="form-control m-3" placeholder="Имя"/>
                                    <input type="number" className="form-control mx-3" placeholder="Контакный телефон"/>
                                    <div className="third-arrow ml-3">
                                        <a href="#!" className="font-family-medium"> <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                           alt=""/>Отправить заявку</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-back">
                        <NavLink to="mainInternet/traffic" >
                            <img src="images/icon/formicon.png" alt=""/>
                            <p>Вернуться назад к выбору тарифа</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainForm;