import React from 'react';
import {getText} from "../../locales";

const IptvPartThree = () => {
    return (
        <div className="installation-part-three ">

            <div className="container installation-part-three-child">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <img src="images/icon/montaj-img.png" alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h4>{getText("control")}</h4>
                        <p>{getText("controlMounting")}</p>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default IptvPartThree;