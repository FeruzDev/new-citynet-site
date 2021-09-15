import React from 'react';
import IPTVPartOne from "./IPTVPartOne";
import IptvPartTwo from "./IPTVPartTwo";
import IptvPartThree from "./IPTVPartThree";
import IptvPartFour from "./IPTVPartFour";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
const MainIptv = () => {
    return (
        <div>
            <NavbarGeneral/>
            <DisplayNavbar/>
            <IPTVPartOne/>
            <IptvPartTwo/>
            <IptvPartThree/>
            <IptvPartFour/>
        </div>
    );
};

export default MainIptv;