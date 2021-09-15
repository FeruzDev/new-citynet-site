import React from 'react';
import PartOne from "./PartOne";
import PartSecond from "./PartSecond";
import Objects from "../videoMonitoring/Objects";
import Footer from "../../components/Footer";

const Design = () => {
    return (
        <div>
            <PartOne/>
            <PartSecond/>
            <Objects/>
            <Footer/>
        </div>
    );
};

export default Design;