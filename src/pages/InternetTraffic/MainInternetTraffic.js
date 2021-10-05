import React, {useEffect} from 'react';
import TrafficOne from "./TrafficOne";
import PriceProvider from "../provider/PriceProvider";
import TrafficTablisa from "./TrafficTablisa";
import TrafficServices from "./TrafficServices";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";


const MainInternetTraffic = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <NavbarGeneral />
            <DisplayNavbar/>

            <TrafficOne/>
            {/*<TrafficTablisa/>*/}
            <TrafficServices/>
            <IptelephonyEight/>
        </div>
    );
};

export default MainInternetTraffic;