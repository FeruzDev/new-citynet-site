import React, {useEffect, useState} from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import {NavLink} from "react-router-dom";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralEight from "../navbar/NavbarGeneralEight";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";
import {toast} from "react-toastify";

const MainForm = (props) => {
    const [city, setCity] = useState([])
    const [cityId, setCityId] = useState(null)

    const [district, setDistrick] = useState([])
    const [districkId, setDistrickId] = useState(null)

    const [street, setStreet] = useState([])
    const [streetId, setStreetId] = useState([])


    const [home, setHome] = useState([])
    const [homeId, setHomeId] = useState([])


    const [selectCityOne, setSelectCity] = useState({})

    useEffect(() => {

        axios.get(API_PATH_RU + "provider/v1/city-list/")
            .then(res => {
                setCity(res.data)
            })
            .catch(err =>{
                toast.error("Oшибка")

            })


    } , [])

    const selectCity = (value) =>{
        setCityId(value)
        axios.get(API_PATH_RU + "provider/v1/district-list/?city="  + value)
            .then(res => {
                setDistrick(res.data)
            })
            .catch(err =>{
                console.log(err)
            })


    }

    const selectDistrick = (value) =>{
        setDistrickId(value)
        axios.get(API_PATH_RU + "provider/v1/street-list/?district="  + value)
            .then(res => {
                setStreet(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    const selectHome = (value) =>{
        setStreetId(value)
        axios.get(API_PATH_RU + "provider/v1/home-list/?street="  + value)
            .then(res => {
                setHome(res.data)

            })
            .catch(err =>{
                console.log(err)
            })
    }

    const selectHomeNumber = (value) =>{
        setHomeId(value)


        // console.log(history)
        // history.push("/")
    }

    const selectStreet = (value) =>{

        let   newArr = street.filter(item => item.id === value)

        console.log(newArr)

    }

    const send =(value)=>{


        console.log(cityId)

        let bigData = new FormData();
        bigData.append("city",  cityId)
        bigData.append("street", streetId)
        bigData.append("district", districkId)
        bigData.append("home",  homeId)
        bigData.append("flat", document.getElementById('Flatn').value)
        bigData.append("full_name", document.getElementById('FullNamen').value)
        bigData.append("phone", document.getElementById('Phonen').value)


        axios.post(API_PATH_RU + "provider/v1/request/" , bigData)
            .then(res => {
                toast.success("Успешно отправлен")
                document.getElementById('Streetn').value = ""
                document.getElementById('Homen').value =""
                document.getElementById('Flatn').value =""
                document.getElementById('FullNamen').value =""
                document.getElementById('Phonen').value =""
                document.getElementById('Cityn').value =""
                document.getElementById('Districkn').value =""
                document.getElementById('Streetn').value =""

            })
            .catch(err =>{
                console.log(err)
            })


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
                                <form className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <select required  className="form-control"  id="Cityn" onChange={e => selectCity(e.target.value)}  >
                                                <option value="" disabled selected>Ваш город</option>
                                                {
                                                    city.map(item => (
                                                        <option value={item.id}>{item.title}</option>
                                                    ))
                                                }

                                            </select>
                                        </div>
                                        {/*<input type="text"  className="form-control" placeholder="Улица"/>*/}




                                        <select  required id="Streetn" id="Districkn" className="form-control" onChange={e => selectHome(e.target.value)}    >

                                            <option value="" disabled selected>Улица</option>
                                            {
                                        street.map(item => (


                                            <option value={item.id}>{item.title}</option>
                                        ))

                                    }

                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <select  required id="Districkn" className="form-control" onChange={e => selectDistrick(e.target.value)}   >
                                                <option value="" disabled selected>Ваш район</option>
                                                {
                                                district.map(item => (


                                                    <option value={item.id}>{item.title}</option>
                                                ))
                                            }


                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                {/*<input   type="number"*/}
                                                {/*         className="form-control"*/}
                                                {/*         id="Homen" placeholder="Дом"/>*/}

                                                <select required  id="Homen" onChange={e => selectHomeNumber(e.target.value)} className="form-control"   >
                                                    <option value="" disabled selected>Дом</option>
                                                    {
                                                    home.map(item => (


                                                        <option value={item.id}>{item.title}</option>
                                                    ))
                                                }


                                                </select>


                                            </div>
                                            <div className="col-md-6"><input  required type="number" id="Flatn" className="form-control pr-0"
                                                                             placeholder="Квартира"/></div>
                                        </div>

                                    </div>
                                    <input required type="text" id="FullNamen" className="form-control m-3" placeholder="Полное имя"/>
                                    <input required type="number" className="form-control mx-3" id="Phonen" placeholder="Контакный телефон"/>
                                    <div className="third-arrow ml-3">
                                        <button  onClick={() =>send()} className="font-family-medium"> <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                           alt=""/>Отправить заявку</button>
                                    </div>
                                </form>
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