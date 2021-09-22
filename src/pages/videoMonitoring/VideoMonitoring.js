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


const VideoMonitoring = () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <NavbarGeneral/>
            <PartOne/>
            <PartSecond/>
            <PartThree/>
            <PartFour/>
            <PartFive/>
            <PartSix/>
            {/*<Objects/>*/}
            {/*<Footer/>*/}
        </div>
    )
}


export default VideoMonitoring;