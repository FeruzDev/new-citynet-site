import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const IpTelephonySeven = () => {

    const [partners ,setPartners] = useState([])


    useEffect(() => {



        axios.get(API_PATH_RU + "index/v1/partners/")
            .then(res => {
                setPartners(res.data)
            })
            .catch(err =>{
                console.log(err)
            })

    }, [])



    return (
        <div className="iptelephony-part-seven position-relative">

            <div className="line23_5">
                <div className="line-insert">
                    <svg width="648" height="47" viewBox="0 0 648 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-205 1L-83.8972 1.00002L-45.7032 38.2624L193.397 38.2625L213.038 18.6221L385.92 18.6221L411.415 42.0765L642.985 42.0765" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M642.754 46.4236C645.16 46.4236 647.101 44.4828 647.101 42.0763C647.101 39.6698 645.16 37.729 642.754 37.729C640.347 37.729 638.406 39.6698 638.406 42.0763C638.406 44.4828 640.347 46.4236 642.754 46.4236Z" fill="#0086E7"/>
                        <g opacity="0.4">
                            <path d="M-134.561 42.2627L-13.4577 42.2627L24.7362 5.00029L262.001 5.00029L283.601 36.8029L395.6 36.8029L421.095 13.3485L508.985 13.3485" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M508.754 9.00124C511.16 9.00124 513.101 10.942 513.101 13.3485C513.101 15.755 511.16 17.6958 508.754 17.6958C506.347 17.6958 504.406 15.755 504.406 13.3485C504.406 10.942 506.347 9.00124 508.754 9.00124Z" fill="#0086E7"/>
                        </g>
                    </svg>
                </div>
            </div>

            <div id='partner' className="container iptelephony-part-seven-child ">
                <h4 className="font-family-medium">Наши партнеры</h4>



                {

                    partners.slice(0, 3).map(item =>(
                        <div className="row d-flex justify-content-between m-0">
                            <div className="row">
                                <img src={item.get_img_url} alt=""/>
                            </div>


                        </div>

                    ))
                }


                {

                    partners.slice(4, 8).map(item =>(
                        <div className="row d-flex justify-content-between m-0">
                            <div className="row">
                                <img src={item.get_img_url} alt=""/>
                            </div>


                        </div>

                    ))
                }


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

export default IpTelephonySeven;