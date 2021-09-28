import React from 'react';
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import NewsList from "./NewsList";
import MainNewForDetail from "./MainNewForDetail";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NewsDetailPair from "./NewsDetailPair";


const NewsDetail = () => {
    return (
        <div>

            <NavbarGeneral />
            <DisplayNavbar/>
            <NewsDetailPair/>
            <MainNewForDetail/>
            <IptelephonyEight/>
            
        </div>
    );
};

export default NewsDetail;