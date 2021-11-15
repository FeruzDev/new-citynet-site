import React, {useEffect} from 'react';
import InstallationPartOne from "./InstallationPartOne";
import InstallationPartThree from "./InstallationPartThree";
import OurEmployees from "./OurEmployees";
import IptvPartFour from "../IPTV/IPTVPartFour";
import DisplayNavbar from "../navbar/DisplayNavbar";
import InstallationTwo from "./installationTwo";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralTwo from "../navbar/NavbarGeneralTwo";

const MainInstallation = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <NavbarGeneralTwo/>
            <DisplayNavbar/>
            <InstallationPartOne/>
            <InstallationPartThree/>
            <InstallationTwo/>
            <OurEmployees/>
            {/*<InstallationEnd/>*/}
            <IptvPartFour/>
            <IptelephonyEight/>


        </div>
    );
};

export default MainInstallation;