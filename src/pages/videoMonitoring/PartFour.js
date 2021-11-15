import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const PartFour = () => {

    const [camera ,setCamera] = useState([])


    useEffect(() => {


        window.scrollTo(0, 0)

        axios.get(API_PATH_RU + "device/v1/product/latest-camera/")
            .then(res => {
                setCamera(res.data)
            })
            .catch(err =>{
                console.log(err)
            })





    }, [])





    return (
        <div id="new2" className="telephony-card-four position-relative">

            <div className="telephony-card-four-child container" >
                <h3  className="font-family-medium"> Новые поступления оборудования</h3>
                <div
                      className="row">

                    <div  className="col-md-8 offset-2">
                     <div  className="position-relative">
                         <img  src={camera[0]?.images[0]?.get_img_url} alt=""/>
                         <div className="third-arrow">
                             <NavLink to="/itequipment">Перейти на сайт<img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></NavLink>
                         </div>
                     </div>
                        <h3  >  {camera[0]?.title} </h3>
                        <div className="line"></div>
                        <p dangerouslySetInnerHTML={{__html:  camera[0]?.main_content }} />
                    </div>

                </div>
            </div>
            <div className="line52">
                <div className="line-insert">
                    <svg width="341" height="52" viewBox="0 0 341 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-619 5.83862L-497.897 5.83863L-459.703 43.101L-16.0408 43.1011L3.59961 23.4607L115.6 23.4607L141.095 46.9151L228.985 46.9151" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M228.753 51.2623C231.159 51.2623 233.1 49.3216 233.1 46.915C233.1 44.5085 231.159 42.5677 228.753 42.5677C226.346 42.5677 224.405 44.5085 224.405 46.915C224.405 49.3216 226.346 51.2623 228.753 51.2623Z" fill="#0086E7"/>
                        <g opacity="0.4">
                            <path d="M-307.562 1L-186.459 1.00003L-148.265 38.2624L89.0003 38.2625L110.6 6.45988L222.599 6.4599L248.094 29.9143L335.984 29.9144" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M335.752 34.2615C338.159 34.2615 340.099 32.3207 340.099 29.9142C340.099 27.5077 338.159 25.5669 335.752 25.5669C333.346 25.5669 331.405 27.5076 331.405 29.9142C331.405 32.3207 333.346 34.2615 335.752 34.2615Z" fill="#0086E7"/>
                        </g>
                    </svg>

                </div>
            </div>
            <div className="line53">
                <div className="line-insert">
                    <svg width="514" height="52" viewBox="0 0 514 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M959.1 45.4236H837.997L799.803 8.16118H356.14L336.5 27.8016H224.5L199.005 4.34715H111.114" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M111.347 2.19345e-05C108.941 2.19345e-05 107 1.94076 107 4.34729C107 6.75383 108.941 8.69458 111.347 8.69458C113.754 8.69458 115.694 6.75383 115.694 4.34729C115.694 1.94076 113.754 2.19345e-05 111.347 2.19345e-05Z" fill="#0086E7"/>
                        <g opacity="0.4">
                            <path d="M647.661 50.2622L526.558 50.2622L488.364 12.9998L251.099 12.9997L229.5 44.8024L117.501 44.8023L92.0055 21.3479L4.11524 21.3479" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M4.34756 17.0008C1.94103 17.0008 0.000301544 18.9415 0.000301479 21.348C0.000301414 23.7546 1.94103 25.6953 4.34756 25.6953C6.75409 25.6953 8.69482 23.7546 8.69482 21.348C8.69482 18.9415 6.75409 17.0008 4.34756 17.0008Z" fill="#0086E7"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PartFour;