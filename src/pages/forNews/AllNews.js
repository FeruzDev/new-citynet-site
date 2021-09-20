import React from 'react';
import NavbarHome from "../navbar/NavbarHome";
import HomeBanner from "../home/HomeBanner";
import NewsList from "./NewsList";

const AllNews = () => {
    return (
        <div>
            <NavbarHome />
            <HomeBanner />
            <NewsList/>
        </div>
    );
};

export default AllNews;