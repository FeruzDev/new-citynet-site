import React, {useEffect} from 'react';
import NewsList from "./NewsList";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import MainNewForDetail from "./MainNewForDetail";


const AllNews = () => {

    useEffect(() =>{
        window.scrollTo(0, 0)

    })
    return (
        <div>
            <NavbarGeneral/>
            <DisplayNavbar/>
            <NewsList/>
            <MainNewForDetail/>
            <IptelephonyEight/>

        </div>
    );
};

export default AllNews;