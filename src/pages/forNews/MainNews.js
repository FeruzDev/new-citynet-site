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
            <div className="container">
                <div className="news-main-title">

                    <h2 className="font-family-medium">
                        Новости
                    </h2>
                    <Link to="/all-news">Все новости</Link>
                </div>
                <div className="row">





                    {
                        news.map(item =>(


                            <div className="col-md-4">
                                <img src={item.image} alt=""/>

                                <h3 className="font-family-medium">{item.title}</h3>
                                <p>{item.content}<Link href="#!">Читать дальше</Link></p>
                            </div>


                        ))
                    }


                    {/*<div className="col-md-4">*/}
                    {/*    <img src="/images/e3.png" alt=""/>*/}

                    {/*    <h3 className="font-family-medium">CityNet предлагает решения в области IT</h3>*/}
                    {/*    <p>Компания CityNet предоставит современное и эффективное решение в IT-сфере, а также*/}
                    {/*        разработает и внедрит его с учетом специфики проекта. <Link href="#!">Читать дальше</Link></p>*/}
                    {/*</div>*/}


                    {/*<div className="col-md-4">*/}
                    {/*    <img src="/images/e2.png" alt=""/>*/}

                    {/*    <h3 className="font-family-medium">Cервисный робот для бизнеса — Promobot V4</h3>*/}
                    {/*    <p>Компания CityNet представляет сервисный робот для бизнеса — Promobot V4. <Link href="#!">Читать дальше</Link></p>*/}
                    {/*</div>*/}


                    {/*<div className="col-md-4">*/}
                    {/*    <img src="/images/e1.png" alt=""/>*/}

                    {/*    <h3 className="font-family-medium">Системы контроля и управления доступом (СКУД)</h3>*/}
                    {/*    <p>СКУД предназначена для автоматического гибкого управления доступом людей в здания и помещения*/}
                    {/*        организации, въездом и выездом автотранспорта на охраняемую территорию <Link href="#!">Читать дальше</Link></p>*/}
                    {/*</div>*/}


                </div>
            </div>
        </div>
    );
};

export default MainNews;