import React from 'react';
import {getText} from "../../locales";

const OurEmployees = () => {
    return (
        <div className="our-employees">
            <div className="container">
                <h4>{getText("offer")}</h4>
                <p>{getText("offerTextOne")}
                </p>
                <p>
                    {getText("offerTextTwo")}
                </p>
                <p>
                    {getText("offerTextThree, nadir")}
                </p>
             <p>
                 {getText("offerOne")}
             </p>
                <p>
                    {getText("offerTwo")}
                </p>
                <p>
                    {getText("offerThree")}
                </p>
                <p>
                    {getText("offerFour")}
                </p>
            </div>
        </div>
    );
};

export default OurEmployees;