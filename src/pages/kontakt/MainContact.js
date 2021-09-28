import React from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import ContactForma from "./ContactForma";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralEight from "../navbar/NavbarGeneralEight";

const MainContact = () => {
    return (
        <div>
            <NavbarGeneralEight></NavbarGeneralEight>
            <DisplayNavbar/>
            <ContactForma/>
            <IptelephonyEight/>

        </div>
    );
};

export default MainContact;