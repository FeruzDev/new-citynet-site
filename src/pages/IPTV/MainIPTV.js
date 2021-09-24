import React from 'react';
import IPTVPartOne from "./IPTVPartOne";
import IptvPartTwo from "./IPTVPartTwo";
import IptvPartThree from "./IPTVPartThree";
import IptvPartFour from "./IPTVPartFour";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
const MainIptv = () => {
    return (
        <div>
            <NavbarGeneral/>
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