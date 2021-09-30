import React, {useEffect, useState} from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import {NavLink} from "react-router-dom";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralEight from "../navbar/NavbarGeneralEight";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const MainForm = () => {
    const [city, setCity] = useState([])

    const [district, setDistrick] = useState([])

    const [street, setStreet] = useState([])
    const [home, setHome] = useState([])


    const [selectCityOne, setSelectCity] = useState({})

    useEffect(() => {

        axios.get(API_PATH_RU + "provider/v1/city-list/")
            .then(res => {
                setCity(res.data)
            })
            .catch(err =>{
                console.log(err)
            })


    } , [])


    const selectCity = (value) =>{

        axios.get(API_PATH_RU + "provider/v1/district-list/?city="  + value)
            .then(res => {
                setDistrick(res.data)
            })
            .catch(err =>{
                console.log(err)
            })


    }
    const selectDistrick = (value) =>{

        axios.get(API_PATH_RU + "provider/v1/street-list/?street="  + value)
            .then(res => {
                setStreet(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }



    const selectStreet = (value) =>{



        let   newArr = street.filter(item => item.id === value)

        console.log(newArr)
    }



    const send =(value)=>{
        const form  = document.getElementById('Entrance').value;


        alert(form)
    }


    return (
        <div>
            <NavbarGeneralEight/>
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
                                            <select className="form-control"  onChange={e => selectCity(e.target.value)} id="exampleFormControlSelect1">
                                                <option  ></option>
                                                {
                                                    city.map(item => (
                                                        <option value={item.id}>{item.title}</option>
                                                    ))
                                                }

                                            </select>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Улица"/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <select className="form-control" onChange={e => selectDistrick(e.target.value)}  id="exampleFormControlSelect1">
                                                <option  ></option>                                            {
                                                district.map(item => (


                                                    <option value={item.id}>{item.title}</option>
                                                ))
                                            }


                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6"><input  type="number" className="form-control"
                                                                              id="Entrance" placeholder="Подезд"/></div>
                                            <div className="col-md-6"><input type="number" className="form-control"
                                                                             placeholder="Квартира"/></div>
                                        </div>

                                    </div>
                                    <input type="text" className="form-control m-3" placeholder="Имя"/>
                                    <input type="number" className="form-control mx-3" placeholder="Контакный телефон"/>
                                    <div className="third-arrow ml-3">
                                        <button  onClick={send} className="font-family-medium"> <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                           alt=""/>Отправить заявку</button>
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


            <IptelephonyEight/>

        </div>
    );
};

export default MainForm;