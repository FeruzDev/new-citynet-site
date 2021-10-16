import React, {useEffect} from 'react';
import HeaderEquipment from "./HeaderEquipment";
import EquipmentParttTwo from "./EquipmentParttTwo";
import Popular from "./Popular";
import EquipmentNew from "./EquipmentNew";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralSeven from "../navbar/NavbarGeneralSeven";

const MainItEquipment = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="overflow-hidden">
            <NavbarGeneralSeven/>
            <DisplayNavbar/>
            <HeaderEquipment/>
            <EquipmentParttTwo/>
            <Popular/>
            <EquipmentNew/>
            <IptelephonyEight/>

        </div>
    );
};

export default MainItEquipment;