import React from 'react';
import TvPartOne from "./TvPartOne";
import TvPartTwo from "./TvPartTwo";
import TvCard from "./TVCard";
import TvChennel from "./TvChennel";
import TvCarousel from "./TVCarousel";
import TvFooter from "./TVFooter";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import SubMenuTwo from "../provider/SubMenuTwo";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralThree from "../navbar/NavbarGeneralThree";

const MainTv = () => {
    return (
        <div className="tv-hidden  ">
            <NavbarGeneralThree  />
            <DisplayNavbar/>

            <TvPartOne/>
            <SubMenuTwo/>
            <TvFooter/>
            <TvCard/>
            <TvChennel/>
            <TvCarousel/>
            <IptelephonyEight/>

        </div>
    );
};

export default MainTv;