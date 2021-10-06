import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const NewsList = () => {
    const [allNews, setAllNews] = useState([])

    useEffect(() => {
        axios.get(API_PATH_RU + "index/v1/news-list/")
            .then(res => {
                setAllNews(res.data)
            })
            .catch(err =>{
                console.log(err)
            })


    } , [])


    return (
        <div className="news-list">

            <div className="container">
                <h2 className="font-family-medium">Новости</h2>




                {
                    allNews.map(item => (
                        <div className="row">

                            <div className="col-md-4">
                                <img src={item.get_img_url} alt="123"/>
                            </div>
                            <div className="col-md-8">
                                <div>
                                    <h4 className="font-family-medium">{item.title}</h4>



                                    <p>  {item.content.length > 250 ? item.content.slice(0, 250) + "..." : item.content}<Link className="ml-2"  to={"/all-news/news-detail/" + item.id}>Читать дальше</Link>
                                    </p>


                                </div>

                                <h6><span className="mr-2">{item.date_created.slice(11, 16)},</span>  {item.date_created.slice(0, 10) }     </h6>
                            </div>
                        </div>
                    ))
                }
            </div>










        </div>
    );
};

export default NewsList;