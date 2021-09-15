import React from 'react';
import HeaderEquipment from "./HeaderEquipment";
import EquipmentParttTwo from "./EquipmentParttTwo";
import Popular from "./Popular";
import EquipmentNew from "./EquipmentNew";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";

const MainItEquipment = () => {
    return (
        <div className="overflow-hidden">
            <NavbarGeneral/>
            <DisplayNavbar/>
            <HeaderEquipment/>
            <EquipmentParttTwo/>
            <Popular/>
            <EquipmentNew/>
        </div>
    );
};

export default MainItEquipment;