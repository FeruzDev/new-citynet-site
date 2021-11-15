import React from 'react';
import {getText} from "../../locales";

const IptvPartThree = () => {
    return (
        <div className="installation-part-three ">

            <div className="container installation-part-three-child">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <img data-aos="fade-up"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="700"
                             src="images/icon/montaj-img.png" alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h4 data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="700"
                            className="font-family-medium">Контроль качества строительно-монтажных работ</h4>
                        <p data-aos="fade-up"
                           data-aos-easing="ease-out-cubic"
                           data-aos-duration="700"
                           data-aos-delay="200"
                        >Основная задача контроля качества строительства — предупреждение, выявление, устранение
                            причин, отклонений, которые могут привести в строительстве к браку. Брак, своевременно
                            обнаруженный в процессе строительства, в большинстве случаев сравнительно легко поддается
                            исправлению с наименьшими затратами.На данный момент наша компания выстроила систему
                            контроля качества, которая включает:</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default IptvPartThree;