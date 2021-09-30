import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const MainNewForDetail = () => {

    const [news, setNews] = useState([])

    useEffect(() =>{


        axios.get(API_PATH_RU + "index/v1/news-list/latest/")
            .then(res => {
                setNews(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])
    return (
        <div className="main-news position-relative">
            <div className="line23_412">
                <div className="line-insert">
                    <svg width="605" height="62" viewBox="0 0 605 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-248 1L-126.897 1.00002L-88.7032 38.2624L150.397 38.2625L170.038 18.6221L342.92 18.6221L368.415 42.0766L599.985 42.0766" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M599.754 46.4241C602.16 46.4241 604.101 44.4833 604.101 42.0768C604.101 39.6702 602.16 37.7295 599.754 37.7295C597.347 37.7295 595.406 39.6702 595.406 42.0768C595.406 44.4833 597.347 46.4241 599.754 46.4241Z" fill="#0086E7"/>
                        <g opacity="0.4">
                            <path d="M-339 23L-217.897 23L-179.703 60.2624L57.5618 60.2625L79.1611 28.4599L191.16 28.4599L216.656 51.9143L304.546 51.9143" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M304.314 56.2615C306.721 56.2615 308.661 54.3207 308.661 51.9142C308.661 49.5077 306.721 47.5669 304.314 47.5669C301.908 47.5669 299.967 49.5076 299.967 51.9142C299.967 54.3207 301.908 56.2615 304.314 56.2615Z" fill="#0086E7"/>
                        </g>
                    </svg>

                </div>
            </div>

            <div className="container">
                <div className="news-main-title">

                    <h2  className="font-family-medium">
                        Ещё новости
                    </h2>

                </div>
                <div className="row">



                    {
                        news.map(item => (
                            <div className="col-md-4">
                                <img src={item.get_img_url} alt=""/>

                                <h3 className="font-family-medium">{item.title}</h3>
                                <p> {item.content} <Link className="ml-2" href="#!">Читать дальше</Link></p>
                            </div>
                        ))
                    }





                </div>
            </div>
            <div className="line2812">
                <div className="line-insert">
                    <svg width="47" height="853" viewBox="0 0 47 853" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.4238 852.1L45.4238 730.997L8.16143 692.803L8.16144 453.703L27.8018 434.062L27.8018 261.18L4.34742 235.685L4.34742 4.11487" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M0.000754458 4.34707C0.000754514 1.94054 1.9415 -0.000187452 4.34803 -0.000187263C6.75456 -0.000187073 8.69531 1.94054 8.69531 4.34707C8.69531 6.7536 6.75456 8.69434 4.34803 8.69434C1.9415 8.69434 0.000754402 6.7536 0.000754458 4.34707Z" fill="#0086E7"/>
                        <g opacity="0.4">
                            <path d="M4.16016 781.661L4.16017 660.558L41.4226 622.364L41.4226 385.099L9.61998 363.5L9.61999 251.5L33.0744 226.005L33.0744 138.115" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M37.4211 138.347C37.4211 135.94 35.4804 133.999 33.0738 133.999C30.6673 133.999 28.7266 135.94 28.7266 138.347C28.7266 140.753 30.6673 142.694 33.0738 142.694C35.4804 142.694 37.4211 140.753 37.4211 138.347Z" fill="#0086E7"/>
                        </g>
                    </svg>

                </div>
            </div>


            <div className="line28">
                <div className="line-insert">
                    <svg width="699" height="97" viewBox="0 0 699 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M853.1 1L731.997 1L693.803 38.2624L454.702 38.2624L435.062 18.622L262.18 18.622L236.685 42.0764L5.11438 42.0764" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M5.3461 46.4236C2.93957 46.4236 0.998837 44.4828 0.998837 42.0763C0.998837 39.6698 2.93957 37.729 5.3461 37.729C7.75263 37.729 9.69336 39.6698 9.69336 42.0763C9.69336 44.4828 7.75263 46.4236 5.3461 46.4236Z" fill="#0086E7"/>
                        <g opacity="0.4">
                            <path d="M968.66 95.2627L847.557 95.2627L809.363 58.0003L572.098 58.0003L550.499 89.8029L438.5 89.8029L413.005 66.3484L325.114 66.3484" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M325.346 62.0012C322.94 62.0012 320.999 63.942 320.999 66.3485C320.999 68.755 322.94 70.6958 325.346 70.6958C327.753 70.6958 329.693 68.755 329.693 66.3485C329.693 63.942 327.753 62.0012 325.346 62.0012Z" fill="#0086E7"/>
                        </g>
                    </svg>
                </div>
            </div>

        </div>


    );
};

export default MainNewForDetail;