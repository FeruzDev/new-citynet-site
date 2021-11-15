import React, {useEffect} from 'react';
import DevelopmentPartOne from "./DevelopmentPartOne";
import InstallationPartFour from "./InstallationPartFour";
import WebApplication from "../Installation/WebApplication";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralFive from "../navbar/NavbarGeneralFive";

const ItDevelopment = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <NavbarGeneralFive/>
            <DisplayNavbar/>
            <DevelopmentPartOne/>
            <WebApplication/>
            <InstallationPartFour/>
            {/*<DevelopmentPart/>*/}
            <IptelephonyEight/>

        </div>
    );
};

export default ItDevelopment;