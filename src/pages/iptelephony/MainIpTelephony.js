import React from 'react';
import IpTelephonyTwo from "./IpTelephonyTwo";
import IpTelephonyThree from "./IpTelephonyThree";
import IpTelephonyFour from "./IpTelephonyFour";
import IptelephonyPartFive from "./Iptelephony-part-five";
 import IpTelephonySix from "./IpTelephonySix";
import IpTelephonySeven from "./IpTelephonySeven";
import IptelephonyEight from "./IptelephonyEight";
import HomeBanner from "../home/HomeBanner";
import NavbarHome from "../navbar/NavbarHome";
import MainNews from "../forNews/MainNews";

const MainIpTelephony = () => {

    return (

        <div className="main-telephony">
            <NavbarHome />
            <HomeBanner />
            <IpTelephonyTwo/>
            <IpTelephonyThree/>
            <IpTelephonyFour/>
            <IptelephonyPartFive/>

            <IpTelephonySix/>
            <MainNews/>
            <IpTelephonySeven/>
            <IptelephonyEight/>

        </div>
    );
};

export default MainIpTelephony;