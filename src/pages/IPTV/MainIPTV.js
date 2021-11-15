import React from 'react';
import IPTVPartOne from "./IPTVPartOne";
import IptvPartTwo from "./IPTVPartTwo";
import IptvPartThree from "./IPTVPartThree";
import IptvPartFour from "./IPTVPartFour";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralTwo from "../navbar/NavbarGeneralTwo";
const MainIptv = () => {
    return (
        <div>
            <NavbarGeneralTwo/>
            <DisplayNavbar/>
            <IPTVPartOne/>
            <IptvPartThree/>
            <IptvPartTwo/>
            <IptvPartFour/>
            <IptelephonyEight/>

        </div>
    );
};

export default MainIptv;