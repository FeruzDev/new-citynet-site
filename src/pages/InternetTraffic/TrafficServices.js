import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const TrafficServices = () => {

    const [popService ,setPopService] = useState([])


    useEffect(() => {



        axios.get(API_PATH_RU + "provider/v1/popular-services/")
            .then(res => {
                setPopService(res.data)
            })
            .catch(err =>{
                console.log(err)
            })

    }, [])


    return (

        <>
            <div className="traffic-services position-relative">
                <div className="traffic-services-child container">
                    <h3  className="font-family-medium">Популярные услуги</h3>
                    <div className="row">



                        {
                            popService.slice(0, 3).map(item =>(
                                <div className="col-md-4">
                                    <div className="boxed">
                                        <img src={item.get_img_url} alt=""/>
                                    </div>
                                    <h4   className="font-family-medium">{item.title} </h4>
                                    <p>{item.content}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="line39">
                    <div className="line-insert">
                        <svg width="445" height="47" viewBox="0 0 445 47" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="line40">
                    <div className="line-insert">
                        <svg width="990" height="100" viewBox="0 0 990 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1042 77.4238L731.997 77.4238L693.803 40.1614H398.14L378.5 59.8018H266.5L241.005 36.3474H5.11438" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M5.3461 32C2.93957 32 0.998837 33.9408 0.998837 36.3473C0.998837 38.7538 2.93957 40.6946 5.3461 40.6946C7.75263 40.6946 9.69336 38.7538 9.69336 36.3473C9.69336 33.9408 7.75263 32 5.3461 32Z" fill="#0086E7"/>
                            <g opacity="0.4">
                                <path d="M1105.66 94.2625L984.558 94.2624L946.364 57L709.099 57L687.5 88.8026L575.501 88.8026L550.005 65.3482L462.115 65.3482" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path d="M462.347 61.001C459.941 61.001 458 62.9417 458 65.3483C458 67.7548 459.941 69.6956 462.347 69.6956C464.754 69.6956 466.694 67.7548 466.694 65.3483C466.694 62.9417 464.754 61.001 462.347 61.001Z" fill="#0086E7"/>
                            </g>
                        </svg>                </div>
                </div>
            </div>


        </>
    );
};

export default TrafficServices;