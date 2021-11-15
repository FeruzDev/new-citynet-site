import React, {useEffect} from 'react';
import BannerCarousel from "./BannerCarousel";
import PriceProvider from "./PriceProvider";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneral from "../navbar/NavbarGeneral";
import ProviderPart from "./PrividerPart";
import DisplayNavbar from "../navbar/DisplayNavbar";
import NewPage from "./NewPage";
import Notification from "./Notification";
import Zona from "./Zona";
import Clients from "./Clients";
import SubMenuTwo from "./SubMenuTwo";
import MainNews from "../forNews/MainNews";

const MainProvider = () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="provider-hidden">

            <NavbarGeneral   />
            <DisplayNavbar/>
            <BannerCarousel/>
            <SubMenuTwo/>
            <Notification/>
            <PriceProvider/>
            <ProviderPart/>

            <NewPage/>

            <Zona/>
            <MainNews/>

            <Clients/>
            <IptelephonyEight/>
        </div>
    );
};

export default MainProvider;