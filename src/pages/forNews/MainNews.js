import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const MainNews = () => {


    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get(API_PATH_RU + "index/v1/news-list/latest/")
            .then(res => {
                setNews(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    } , [])
    return (
        <div className="main-news" id="news">
            <div data-aos="fade-up"

                 data-aos-duration="700"
                 data-aos-easing="ease-in-out"

                 className="container">
                <div

                     className="news-main-title">

                    <h2  className="font-family-medium">
                        Новости
                    </h2>
                    <Link to="/all-news">Все новости</Link>
                </div>
                <div
                      className="row"

                >






                    {
                        news.map(item =>(


                            <Link  to={"/all-news/news-detail/" + item.id} className="col-md-4">
                                <img src={item.get_img_url} alt=""/>

                                <h3 className="font-family-medium">{item.title}</h3>




                                    <p className=" mb-0 " dangerouslySetInnerHTML={{__html: item.content.length > 70 ? item.content.slice(0, 70) + "  " : item.content + "  "   }} />
                                <Link  to={"/all-news/news-detail/" + item.id}>Читать дальше</Link>



                            </Link>


                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default MainNews;