import React, {useEffect, useState  } from 'react';
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";
import {useHistory} from "react-router-dom";
import MainForm from "../TarifForma/MainForm";

const IptvPartThree = (props) => {


    const [city, setCity] = useState([])

    const [district, setDistrick] = useState([])
    const [districtId, setDistrickId] = useState([])

    const [street, setStreet] = useState([])
    // const [home, setHome] = useState([])


    // const [selectCityOne, setSelectCity] = useState({})

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
        setDistrickId(value)
        axios.get(API_PATH_RU + "provider/v1/street-list/?district="  + value)
            .then(res => {
                setStreet(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }



    const selectStreet = (value) =>{

        console.log(value)


    }

    const history = useHistory();


    const sendDataConnect =(value)=>{


        <MainForm data={value}/>

     history.push("/form")
    }

    return (
        <>

        <div className="forma-provider position-relative">
            <h2  data-aos="fade-up"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="700"

                 className="container font-family-medium">Зона покрытия</h2>

            <div  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="700"
                  data-aos-delay="100"
                  className="container traffic-part-one-child">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/icon/internettraffic.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="p-4">
                            <h4>Проверьте доступность услуг</h4>
                            <p>Узнайте, какие услуги можно подключить по вашему адресу</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <select className="form-control" onChange={e => selectCity(e.target.value)}  id="exampleFormControlSelect1">

                                            <option  ></option>
                                            {
                                                city.map(item => (
                                                    <option value={item.id}>{item.title}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <select className="form-control"   onChange={e => selectDistrick(e.target.value)}  id="exampleFormControlSelect1">
                                            <option  ></option>                                            {
                                                district.map(item => (


                                                <option value={item.id}>{item.title}</option>
                                                ))
                                            }




                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <select className="form-control" onChange={e => selectStreet(e.target.value)} id="exampleFormControlSelect1">

                                            <option  ></option>                                            {
                                            street.map(item => (


                                                <option value={item.id}>{item.title}</option>
                                            ))
                                        }


                                        </select>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    <div className="traffic-tabisa position-relative">
        <div className="traffic-tablisa-child container">
            <table className="table-sm ">
                <tr>
                    <th className="font-family-medium">Район</th>

                    <th className="font-family-medium">Улица</th>
                    <th className="font-family-medium">Дома</th>
                    <th className="font-family-medium">Технология</th>
                </tr>


                {
                    street.map(item => (
                        <tr>
                            <td>{item.district_name}</td>
                            <td>{item.title}</td>

                            <td>
                                {
                                   item.flats?.map(( item2) => (
                                       <span   >  { item2.title + " "} </span>
                                   )
                            )}

                            </td>
                            <td><div className="technology"><p>{item.tech_name}</p></div></td>
                            <td><button onClick={ () => sendDataConnect(item)}>Подключить</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
        <div className="line60">
            <div className="line-insert">
                <svg width="704" height="101" viewBox="0 0 704 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M853.1 1H731.997L693.803 38.2624H454.702L435.062 18.622H262.18L236.685 42.0764H5.11438"
                          stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                    <path
                        d="M5.3461 46.4236C2.93957 46.4236 0.998837 44.4828 0.998837 42.0763C0.998837 39.6698 2.93957 37.729 5.3461 37.729C7.75263 37.729 9.69336 39.6698 9.69336 42.0763C9.69336 44.4828 7.75263 46.4236 5.3461 46.4236Z"
                        fill="#0086E7"></path>
                    <path
                        d="M1118.1 99.4238H996.997L958.803 62.1614H515.14L495.5 81.8018H383.5L358.005 58.3474H270.114"
                        stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                    <path
                        d="M270.346 54.0003C267.94 54.0003 265.999 55.941 265.999 58.3475C265.999 60.7541 267.94 62.6948 270.346 62.6948C272.753 62.6948 274.693 60.7541 274.693 58.3475C274.693 55.941 272.753 54.0003 270.346 54.0003Z"
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

        </>


    );
};

export default IptvPartThree;