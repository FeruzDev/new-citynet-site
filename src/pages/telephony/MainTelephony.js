import React from 'react';
import TelephonyCardOne from "./TelephonyCardOne";
import TelephonyCardTwo from "./TelephonyCardTwo";
import TelephonyCardThree from "./TelephonyCardThree"
import TelephonyCardFour from "./TelephonyCardFour";
import DisplayNavbar from "../navbar/DisplayNavbar";
import PriceCards from "./PriceCards";
import TelText from "./TelText";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralFour from "../navbar/NavbarGeneralFour";

const MainTelephony = () => {
    return (
        <div>
            <NavbarGeneralFour/>
            <DisplayNavbar/>
            <TelephonyCardOne/>
            <PriceCards/>

            <TelephonyCardThree/>
            <TelephonyCardTwo/>
            <TelText/>
            <TelephonyCardFour/>
            <IptelephonyEight/>


        </div>
    );
};

export default MainTelephony;