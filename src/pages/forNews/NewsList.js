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



    const [load, setLoad] =useState(8)
    const loadMore = () => {

        setLoad(load + 4)
    }




    return (
        <div className="news-list">

            <div className="container">
                <h2 data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                    className="font-family-medium">Новости</h2>




                {
                    allNews?.slice(0, load).map(item => (
                        <div data-aos="fade-up"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="700"
                             className="row">

                            <div className="col-md-4">
                                <img src={item.get_img_url} alt="123"/>
                            </div>
                            <div className="col-md-8">
                                <div>
                                    <h4 className="font-family-medium">{item.title}</h4>



                                    <p  className="d-inline" dangerouslySetInnerHTML={{__html :  item.content.length > 90 ? item.content.slice(0, 90) + "..." : item.content}}>
                                    </p>

                                    <Link className="ml-2 d-inline"  to={"/all-news/news-detail/" + item.id}>Читать дальше</Link>

                                </div>

                                <h6><span className="mr-2">{item.date_created.slice(11, 16)},</span>  {item.date_created.slice(0, 10) }     </h6>
                            </div>
                        </div>
                    ))
                }


                {allNews.length > 28 ?

                    <div className="load-btn mt-5">


                        <button onClick={() => loadMore()}>Посмотреть больше</button>
                    </div>
                    :
                    ""
                }

            </div>










        </div>
    );
};

export default NewsList;