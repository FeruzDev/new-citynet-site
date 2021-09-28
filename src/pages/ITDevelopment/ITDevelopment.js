import React from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import InstallationPartOne from "../Installation/InstallationPartOne";
import DevelopmentPartOne from "./DevelopmentPartOne";
import InstallationPartThree from "../Installation/InstallationPartThree";
import InstallationPartFour from "./InstallationPartFour";
import WebApplication from "../Installation/WebApplication";
import IptvPartFour from "../IPTV/IPTVPartFour";
import DevelopmentPart from "./DevelopmentPart";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralFive from "../navbar/NavbarGeneralFive";

const ItDevelopment = () => {
    return (
        <div>
            <NavbarGeneralFive/>
            <DisplayNavbar/>
            <DevelopmentPartOne/>
            <WebApplication/>
            <InstallationPartFour/>
            <DevelopmentPart/>
            <IptelephonyEight/>

        </div>
    );
};

export default ItDevelopment;