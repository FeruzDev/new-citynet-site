import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";
import MainNewForDetail from "./MainNewForDetail";
import IptelephonyEight from "../iptelephony/IptelephonyEight";

const NewsDetailPair = (props) => {


    const [newsItem , setNewsItem] = useState({})
    useEffect(() =>{

        window.scrollTo(0, 0)


        axios.get(API_PATH_RU + "index/v1/news-list/" + props.match.params.id)
            .then(res => {
                setNewsItem(res.data)
            })
            .catch(err =>{
                console.log(err)
            })

    },[props.match.params.id])
    return (


        <div>

        <NavbarGeneral />
     <DisplayNavbar/>
        <div className="news-detail container">


            <h2>{newsItem.title}</h2>
            <span>{newsItem.date_created?.slice(0, 10)}</span>

            <img src={newsItem.get_img_url} alt="123"/>

            <p dangerouslySetInnerHTML={{ __html: newsItem.content } }>

            </p>

        </div>
    <MainNewForDetail/>
    <IptelephonyEight/>

        </div>

    );
};

export default NewsDetailPair;