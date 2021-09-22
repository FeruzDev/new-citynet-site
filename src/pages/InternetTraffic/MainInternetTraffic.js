import React from 'react';
import TrafficOne from "./TrafficOne";
import PriceProvider from "../provider/PriceProvider";
import TrafficTablisa from "./TrafficTablisa";
import TrafficServices from "./TrafficServices";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneral from "../navbar/NavbarGeneral";

const MainInternetTraffic = () => {
    return (
        <div>
           <NavbarGeneral/>

            <TrafficOne/>
            <TrafficTablisa/>
            <TrafficServices/>
            <IptelephonyEight/>
        </div>
    );
};

export default MainInternetTraffic;