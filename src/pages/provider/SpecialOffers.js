import React from 'react';

const SpecialOffers = () => {
    return (
        <div className='special-offers'>
            <h1>Специальные предложения</h1>
            <div className="row">

                <div className="col-md-6">
                    <img className="laptop-img" src="/images/laptop.png" alt=""/>
                </div>
                <div className="col-md-6">
                    <h2>Объекты <br/>
                        проектирование</h2>
                    <p>
                        Мы предлагаем полный спектр услуг от проектирования до внедрения, а так же разработаем
                        индивидуальные решения для вашего проекта с учетом его специфики
                    </p>
                    <div className="third-arrow">
                        <a href="#!">Подробнее <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;