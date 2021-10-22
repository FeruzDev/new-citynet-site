import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const EquipmentNew = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4.94,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: "unslick"
            }

        ]
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }

    }



    const [pop ,setPop] = useState([])


    useEffect(() => {



        axios.get(API_PATH_RU + "device/v1/product/new/")
            .then(res => {
                setPop(res.data)
            })
            .catch(err =>{
                console.log(err)
            })

    }, [])


    return (
        <div>
            <div id="new23" className="provider container">

                <h1>Новинки</h1>
                <Slider {...settings}>
                    {
                        pop.map(item => (
                            <div className="popular">
                                <div className="popular-child">
                                    <div className="card-body">
                                        <img src="images/icon/stock .png" alt=""/>
                                        <span><img src={item.images[0]?.get_img_url} alt=""/></span>
                                        <h4>{item.category_name}</h4>
                                        <p dangerouslySetInnerHTML={{__html: item.main_content.length > 50 ? item.main_content.slice(0, 50) : item.main_content }}>
                                        </p>


                                        <div className="card-footer-it">
                                            <h3  className="font-family-medium"><del></del><br/>{item.price}</h3>
                                            <div className="d-flex pl-3 ml-3 mt-3">

                                                <Link  to={"/itequipment/equipment/" + item.id} className="btn btn-primary font-family-medium">Подробнее</Link>


                                            </div>
                                        </div>


                                                       </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default EquipmentNew;