import React from 'react';
import TvPartOne from "./TvPartOne";
import TvPartTwo from "./TvPartTwo";
import TvCard from "./TVCard";
import TvChennel from "./TvChennel";
import TvCarousel from "./TVCarousel";
import TvFooter from "./TVFooter";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";

const MainTv = () => {
    return (
        <div className="tv-hidden  ">
            <NavbarGeneral/>
            <DisplayNavbar/>
            <TvPartOne/>
            <TvPartTwo/>
            <TvCard/>
            <TvFooter/>
            <TvChennel/>
            <TvCarousel/>
        </div>
    );
};

export default MainTv;