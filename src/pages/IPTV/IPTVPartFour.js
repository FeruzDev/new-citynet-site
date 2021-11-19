import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";
import Slider from "react-slick"



const IptvPartFour = () => {


    const [ins ,setIns] = useState([])

    useEffect(() => {

        axios.get(API_PATH_RU + "index/v1/objects/")
            .then(res => {
                setIns(res.data)
            })
            .catch(err =>{
                console.log(err)
            })

    }, [])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div id="installation"className="iptv-part-four position-relative">
            <div className="line121">
                <div className="line-insert">
                    <svg width="635" height="58" viewBox="0 0 635 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M984.1 56.4238H862.997L824.803 19.1614H381.14L361.5 38.8018H249.5L224.005 15.3474H136.114" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M136.346 11.0003C133.94 11.0003 131.999 12.941 131.999 15.3475C131.999 17.7541 133.94 19.6948 136.346 19.6948C138.753 19.6948 140.693 17.7541 140.693 15.3475C140.693 12.941 138.753 11.0003 136.346 11.0003Z" fill="#0086E7"/>
                        <g opacity="0.4">
                            <path d="M648.66 38.2625L527.557 38.2624L489.363 1.00004L252.098 1.00002L230.499 32.8026L118.5 32.8026L93.0045 9.34822L5.11426 9.34821" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M5.3461 5.001C2.93957 5.001 0.998838 6.94174 0.998837 9.34827C0.998837 11.7548 2.93957 13.6956 5.3461 13.6956C7.75263 13.6956 9.69336 11.7548 9.69336 9.34827C9.69336 6.94174 7.75263 5.001 5.3461 5.001Z" fill="#0086E7"/>
                        </g>
                    </svg>

                </div>
            </div>
            <div className="container iptv-part-four-child">
                <h4 data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"

                    className="font-family-medium">Проделанные работы</h4>
                <div className="row-carousel">

                    {/*{*/}
                    {/*    ins.slice(0, 3).map(item => (*/}
                    {/*        <div  data-aos="fade-up"*/}
                    {/*              data-aos-easing="ease-out-cubic"*/}
                    {/*              data-aos-duration="700"*/}
                    {/*              className="col-md-4 col-sm-6">*/}
                    {/*            <div className="boxed">*/}
                    {/*                <img src={item.get_img_url} alt=""/>*/}
                    {/*            </div>*/}
                    {/*            <h5 className="font-family-medium">{item.title}</h5>*/}
                    {/*            <p>{item.content}</p>*/}
                    {/*        </div>*/}


                    {/*    ))*/}
                    {/*}*/}


                    <Slider {...settings}>

                        {
                            ins.map(item => (
                                <div data-aos="fade-up"
                                     data-aos-easing="ease-out-cubic"
                                     data-aos-duration="700"
                                     className="p-3 w-100">
                                    <div className="boxed">
                                        <img src={item.get_img_url} alt=""/>
                                    </div>
                                    <h5 className="font-family-medium">{item.title}</h5>
                                    <p>{item?.content}</p>
                                </div>


                            ))
                        }
                    </Slider>



                </div>
              
            </div>
        </div>
    );
};

export default IptvPartFour;