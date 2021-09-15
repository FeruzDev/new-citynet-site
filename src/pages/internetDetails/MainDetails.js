import React from 'react';
import DetailsPartOne from "./DetailsPartOne";
import DetailsPartTwo from "./DetailsPartTwo";
import DetailsPartThree from "./DetailsPartThree";
import DetailsPartFour from "./DetailsPartFour";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
const MainDetails = () => {
    return (
        <div className="details-hidden">
            <NavbarGeneral/>
<DisplayNavbar/>
            <DetailsPartOne/>
            <DetailsPartTwo/>
            <DetailsPartThree/>
            <DetailsPartFour/>
        </div>
    );
};

export default MainDetails;