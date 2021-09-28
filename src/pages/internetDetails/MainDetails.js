import React from 'react';
import DetailsPartOne from "./DetailsPartOne";
import DetailsPartTwo from "./DetailsPartTwo";
import DetailsPartThree from "./DetailsPartThree";
import DetailsPartFour from "./DetailsPartFour";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import Trust from "./Trust";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import Clients from "../provider/Clients";

const MainDetails = () => {
    return (
        <div className="details-hidden">
            <NavbarGeneral/>
            <DisplayNavbar/>
            <DetailsPartOne/>
            <DetailsPartTwo/>
            <DetailsPartThree/>
            <DetailsPartFour/>
            <Trust/>
            <Clients/>
            <IptelephonyEight/>

        </div>
    );
};

export default MainDetails;