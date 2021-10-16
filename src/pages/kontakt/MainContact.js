import React, {useEffect} from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import ContactForma from "./ContactForma";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralEight from "../navbar/NavbarGeneralEight";

const MainContact = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
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