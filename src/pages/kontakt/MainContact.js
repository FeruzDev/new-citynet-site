import React from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import ContactForma from "./ContactForma";
import DisplayNavbar from "../navbar/DisplayNavbar";

const MainContact = () => {
    return (
        <div>
           <NavbarGeneral/>
            <DisplayNavbar/>
            <ContactForma/>

        </div>
    );
};

export default MainContact;