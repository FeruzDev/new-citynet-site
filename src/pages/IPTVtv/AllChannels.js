import React, {useEffect, useState} from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralThree from "../navbar/NavbarGeneralThree";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const AllChannels = () => {

    const [allChannels, setChannels] = useState([])


    useEffect(() => {
        window.scrollTo(0, 0)


        axios.get(API_PATH_RU + "provider/v1/channels/all/")
            .then(res => {
                setChannels(res.data)
            })
            .catch(err =>{
                console.log(err)
            })

    }, [])
    return (
        <div className="all-channels">
            <NavbarGeneralThree/>
            <DisplayNavbar/>


            <div className="all-channels-childs">
              <div className="container">
                  {
                      allChannels.map(item => (

                          <>
                              <h2 className="font-family-medium mt-5">{item.title}</h2>




                              <div className="row">

                                  {
                                      item.channels?.map(item2=>(

                                          <div className="col-md-2">
                                              <img src={item2.get_img_url} alt=""/>

                                              <h4>    {item2.title}      </h4>
                                          </div>
                                      ))

                                  }

                              </div></>

                      ))
                  }





              </div>


                <div className="line120m4">
                    <div className="line-insert">

                        <svg width="582" height="52" viewBox="0 0 582 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M960.1 45.4241H838.997L800.803 8.16167H357.14L337.5 27.8021H225.5L200.005 4.34764H112.114" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M112.348 2.19345e-05C109.942 2.19345e-05 108.001 1.94076 108.001 4.34729C108.001 6.75383 109.942 8.69458 112.348 8.69458C114.755 8.69458 116.695 6.75383 116.695 4.34729C116.695 1.94076 114.755 2.19345e-05 112.348 2.19345e-05Z" fill="#0086E7"/>
                            <g opacity="0.4">
                                <path d="M648.66 50.2625L527.557 50.2624L489.363 13L252.098 12.9999L230.499 44.8026L118.5 44.8025L93.0045 21.3481L5.11426 21.3481" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path d="M5.3461 17.001C2.93957 17.001 0.998837 18.9417 0.998837 21.3483C0.998837 23.7548 2.93957 25.6956 5.3461 25.6956C7.75263 25.6956 9.69336 23.7548 9.69336 21.3483C9.69336 18.9417 7.75263 17.001 5.3461 17.001Z" fill="#0086E7"/>
                            </g>
                        </svg>

                    </div>
                </div>
            </div>



            <IptelephonyEight/>







        </div>
    );
};

export default AllChannels;