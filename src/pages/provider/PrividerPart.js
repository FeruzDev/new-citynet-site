import React from 'react';
import {Link} from "react-router-dom";

const ProviderPart = () => {
    return (
        <div>
            <div className="provider-part position-relative">

                <div className="iptelephony-part-three-child container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/icon/iptelephonyfour.png" alt=""/>
                        </div>
                        <div className="col-md-6 ">
                            <h3 className="font-family-medium mb-5">Какие цели мы преследуем и что можем предложить нашей клиентуре</h3>
                            <p>
                                Целями компании являются создание единого городского информационного пространства и
                                предоставление максимального количества сервисов и услуг клиентам сети. В рамках одного
                                подключения полного пакета мы можем предоставить нижеуказанные услуги
                            </p>
                            <div className="third-arrow">
                                <Link to="/internetDetails" className="font-family-medium">Подробнее <img
                                    className="arrow-img-white"
                                    src="/images/icon/Arrow4.png"
                                    alt=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default ProviderPart;