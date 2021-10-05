
import React, {useEffect, useState} from 'react';
import NavbarGeneralSeven from "../navbar/NavbarGeneralSeven";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";
import Slider from "react-slick";



const MainEquipment = (props) => {



    const [product, setProduct] = useState({})


    useEffect(()=>{
        axios.get(API_PATH_RU + "device/v1/product/" + props.match.params.id)
            .then(res =>{
                setProduct(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    } , [])


    const [url , setUrl] = useState([])




    const settings = {
        customPaging: function(i) {

            return (
                <a>


                </a>
            );
        },
        dots: false,
        dotsClass: " ",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className="equipment position-relative overflow-hidden">
            <NavbarGeneralSeven/>
            <DisplayNavbar/>

            <div className=" equipment-child">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-9">
                            <p>Главная > Каталог > ITC Audio T-6708 Сетевой аудио адаптер, без встроенного усилителя</p>
                            <div className="row">
                                <div className="col-md-5">

                                    <Slider {...settings}>

                                        {product.images?.map(item2 =>(
                                            <div  className="col-md-12 col-sm-6">
                                                <img src={item2.get_img_url} />
                                            </div>
                                        ))}



                                    </Slider>


                                </div>
                                <div className="col-md-7">
                                    <h4  className="font-family-medium">{product.title}</h4>
                                    <div> {product.category_name}
                                    </div>
                                    <h3  className="font-family-medium">{product.price} сум</h3>
                                    <span><img src="images/icon/stock .png" alt=""/></span>
                                    <p>Запросить дилерскую цену</p>
                                    <button type="button" className="btn btn-primary"><span>Инфо</span></button>
                                </div>
                            </div>
                            <div className="equipment-footer">

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                           role="tab" aria-controls="home" aria-selected="true">О продукте</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                           role="tab" aria-controls="profile" aria-selected="false">Спецификация</a>
                                    </li>

                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                                         aria-labelledby="home-tab">

                                        <h4 className="mt-5">ОПИСАНИЕ ITC Audio T-6708 Сетевой аудио адаптер, без встроенного усилителя</h4>
                                        <p className="mt-4">IP акустическая система используется для приема цифровых (TCP/IP) аудио сигналов с целью
                                            усиления и дальнейшего воспроизведения
                                        </p>
                                        <p className="mt-4">
                                            Используется для построения систем автоматического аварийного оповещения и музыкальной трансляции на базе дополнительного оборудования
                                        </p>
                                        <p className="mt-4">
                                            Работает в составе IP системы при включенном сервере (компьютере). Номер акустической системы настраивается с помощью программного обеспечения ITC T-6700R
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel"
                                         aria-labelledby="profile-tab">
                                        <h4 className="mt-5">ОПИСАНИЕ ITC Audio T-6708 Сетевой аудио адаптер, без встроенного усилителя</h4>

                                        <p className="mt-4">IP акустическая система используется для приема цифровых (TCP/IP) аудио сигналов с целью
                                            усиления и дальнейшего воспроизведения
                                        </p>
                                        <p className="mt-4">
                                            Используется для построения систем автоматического аварийного оповещения и музыкальной трансляции на базе дополнительного оборудования
                                        </p>
                                        <p className="mt-4">
                                            Работает в составе IP системы при включенном сервере (компьютере). Номер акустической системы настраивается с помощью программного обеспечения ITC T-6700R
                                        </p>
                                    </div>

                                </div>




                            </div>

                        </div>
                    </div>
                </div>



                <div className="line34">
                    <div className="line-insert">
                        <svg width="445" height="47" viewBox="0 0 445 47" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M-408 1L-286.897 1.00001L-248.703 38.2624L-9.60279 38.2624L10.0376 18.6221L182.92 18.6221L208.415 42.0765L439.985 42.0765"
                                stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                            <path
                                d="M439.754 46.4238C442.16 46.4238 444.101 44.4831 444.101 42.0765C444.101 39.67 442.16 37.7292 439.754 37.7292C437.347 37.7292 435.406 39.67 435.406 42.0765C435.406 44.4831 437.347 46.4238 439.754 46.4238Z"
                                fill="#0086E7"></path>
                            <g opacity="0.4">
                                <path
                                    d="M-337.561 42.2625L-216.458 42.2625L-178.264 5.00005L59.0013 5.00005L80.6006 36.8027L192.6 36.8027L218.095 13.3483L305.985 13.3483"
                                    stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                                <path
                                    d="M305.754 9.001C308.16 9.001 310.101 10.9417 310.101 13.3483C310.101 15.7548 308.16 17.6956 305.754 17.6956C303.347 17.6956 301.406 15.7548 301.406 13.3483C301.406 10.9417 303.347 9.001 305.754 9.001Z"
                                    fill="#0086E7"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>


            <IptelephonyEight/>


        </div>
    );
};

export default MainEquipment;