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

const ItDevelopment = () => {
    return (
        <div>
            <NavbarGeneral/>
            <DisplayNavbar/>
            <DevelopmentPartOne/>
            <InstallationPartFour/>
            <WebApplication/>
            <DevelopmentPart/>
        </div>
    );
};

export default ItDevelopment;