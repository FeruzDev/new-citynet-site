import React, {useEffect} from 'react'
import PartOne from "./PartOne";
import PartSecond from "./PartSecond";
import PartThree from "./PartThree";
import Objects from "./Objects";
import Footer from "../../components/Footer";
import PartFour from "./PartFour";
import PartSix from "./PartSix";
import PartFive from "./PartFive";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import IptelephonyEight from "../iptelephony/IptelephonyEight";
import NavbarGeneralSix from "../navbar/NavbarGeneralSix";
import IptvPartFour from "../IPTV/IPTVPartFour";
import AOS from "aos";


const VideoMonitoring = () => {
    AOS.init();
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="overflow-hidden">
            <NavbarGeneralSix/>
            <PartOne/>
            <PartSecond/>
            <PartThree/>
            <PartFour/>
            {/*<PartFive/>*/}
            {/*<PartSix/>          */}
            <IptvPartFour/>


            {/*<Objects/>*/}
            {/*<Footer/>*/}
            <IptelephonyEight/>

        </div>
    )
}


export default VideoMonitoring;