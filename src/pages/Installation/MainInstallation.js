import React from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import IPTVPartOne from "../IPTV/IPTVPartOne";
import InstallationPartOne from "./InstallationPartOne";
import InstallationPartThree from "./InstallationPartThree";
import OurEmployees from "./OurEmployees";
import IptvPartFour from "../IPTV/IPTVPartFour";
import WebApplication from "./WebApplication";
import InstallationEnd from "./InstallationEnd";
import DisplayNavbar from "../navbar/DisplayNavbar";
import InstallationTwo from "./installationTwo";

const MainInstallation = () => {
    return (
        <div>
            <NavbarGeneral/>
            <DisplayNavbar/>
            <InstallationPartOne/>
            <InstallationPartThree/>
            <InstallationTwo/>
            <OurEmployees/>
            <InstallationEnd/>

        </div>
    );
};

export default MainInstallation;