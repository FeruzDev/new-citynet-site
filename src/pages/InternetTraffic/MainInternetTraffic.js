import React, {useEffect} from 'react';
import TrafficOne from "./TrafficOne";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import MainNews from "../forNews/MainNews";


const MainInternetTraffic = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <NavbarGeneral />
            <DisplayNavbar/>

            <TrafficOne/>
            <MainNews/>

            <IptelephonyEight/>
        </div>
    );
};

export default MainInternetTraffic;