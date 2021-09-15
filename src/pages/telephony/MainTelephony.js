import React from 'react';
import TelephonyCardOne from "./TelephonyCardOne";
import TelephonyCardTwo from "./TelephonyCardTwo";
import TelephonyCardThree from "./TelephonyCardThree"
import TelephonyCardFour from "./TelephonyCardFour";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
const MainTelephony = () => {
    return (
        <div><NavbarGeneral/>
            <DisplayNavbar/>
            <TelephonyCardOne/>
            <TelephonyCardTwo/>
            <TelephonyCardThree/>
            <TelephonyCardFour/>
        </div>
    );
};

export default MainTelephony;