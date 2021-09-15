import React from 'react';
import NavbarProvider from "./NavbarProvider";
import BannerCarousel from "./BannerCarousel";
import CategoryProvider from "./CategoryProvider";
import PriceProvider from "./PriceProvider";
import SpecialOffers from "./SpecialOffers";
import Test from "../../components/Test";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import TrafficServices from "../InternetTraffic/TrafficServices";
import TrafficOne from "../InternetTraffic/TrafficOne";
import IpTelephonyThree from "../iptelephony/IpTelephonyThree";
import NavbarGeneral from "../navbar/NavbarGeneral";
import FormaProvider from "./FormaProvider";
import ProviderPart from "./PrividerPart";
import DisplayNavbar from "../navbar/DisplayNavbar";
import NewPage from "./NewPage";

const MainProvider = () => {
    return (
        <div className="provider-hidden">

            <NavbarGeneral/>
            <DisplayNavbar/>
            <BannerCarousel/>
            <PriceProvider/>
            <ProviderPart/>
            <NewPage/>
            <FormaProvider/>
            <TrafficServices/>
            <Test/>
            <IptelephonyEight/>
        </div>
    );
};

export default MainProvider;