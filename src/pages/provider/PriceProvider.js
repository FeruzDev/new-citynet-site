import React from 'react';
import Slider from "react-slick";



const PriceProvider = () => {


    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5 ,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }

    }


    return (
        <div className="price-provider">

            <h1>Тарифы</h1>
            <Slider {...settings}>
                <div className='price-item'>
           <div className="price-item-child">
               <h2>Стартовый</h2>
               <div className='speed-list'>
                   <img src="/images/icon/moon.png" alt=""/>
                   <h3>
                       <span>200 Мб/с</span>
                       <span>Скорость, до с 01:00 до 13:00</span>
                   </h3>
               </div>

               <div className='speed-list'>
                   <img src="/images/icon/sun.png" alt=""/>
                   <h3>
                       <span>200 Мб/с</span>
                       <span>Скорость, до </span>
                   </h3>
               </div>


               <div className='speed-list'>
                   <img src="/images/icon/infin.png" alt=""/>
                   <h3>
                       <span>Безлимит</span>
                   </h3>
               </div>

               <p>TAS-IX 6 Мбит/с на ADSL</p>



               <h1>
                   90 000
               </h1>
               <h5>
                   Сум / Месяц
               </h5>

               <div className="third-arrow">
                   <a href="#!">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
               </div>
           </div>
                </div>


                <div className='price-item'>
                    <div className="price-item-child">
                        <h2>Оптимальный</h2>
                        <div className='speed-list'>
                            <img src="/images/icon/moon.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до с 01:00 до 13:00</span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <img src="/images/icon/sun.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до </span>
                            </h3>
                        </div>


                        <div className='speed-list'>
                            <img src="/images/icon/infin.png" alt=""/>
                            <h3>
                                <span>Безлимит</span>
                            </h3>
                        </div>

                        <p>TAS-IX 6 Мбит/с на ADSL</p>



                        <h1>
                            90 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>

                        <div className="third-arrow">
                            <a href="#!">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className='price-item'>
                    <div className="price-item-child">
                        <h2>Безлимитный</h2>
                        <div className='speed-list'>
                            <img src="/images/icon/moon.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до с 01:00 до 13:00</span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <img src="/images/icon/sun.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до </span>
                            </h3>
                        </div>


                        <div className='speed-list'>
                            <img src="/images/icon/infin.png" alt=""/>
                            <h3>
                                <span>Безлимит</span>
                            </h3>
                        </div>

                        <p>TAS-IX 6 Мбит/с на ADSL</p>



                        <h1>
                            90 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>

                        <div className="third-arrow">
                            <a href="#!">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className='price-item'>
                    <div className="price-item-child">
                        <h2>Премиум</h2>
                        <div className='speed-list'>
                            <img src="/images/icon/moon.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до с 01:00 до 13:00</span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <img src="/images/icon/sun.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до </span>
                            </h3>
                        </div>


                        <div className='speed-list'>
                            <img src="/images/icon/infin.png" alt=""/>
                            <h3>
                                <span>Безлимит</span>
                            </h3>
                        </div>

                        <p>TAS-IX 6 Мбит/с на ADSL</p>



                        <h1>
                            90 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>

                        <div className="third-arrow">
                            <a href="#!">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className='price-item'>
                    <div className="price-item-child">
                        <h2>Платинум</h2>
                        <div className='speed-list'>
                            <img src="/images/icon/moon.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до с 01:00 до 13:00</span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <img src="/images/icon/sun.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до </span>
                            </h3>
                        </div>


                        <div className='speed-list'>
                            <img src="/images/icon/infin.png" alt=""/>
                            <h3>
                                <span>Безлимит</span>
                            </h3>
                        </div>

                        <p>TAS-IX 6 Мбит/с на ADSL</p>



                        <h1>
                            90 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>

                        <div className="third-arrow">
                            <a href="#!">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className='price-item'>
                    <div className="price-item-child">
                        <h2>Премиум</h2>
                        <div className='speed-list'>
                            <img src="/images/icon/moon.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до с 01:00 до 13:00</span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <img src="/images/icon/sun.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до </span>
                            </h3>
                        </div>


                        <div className='speed-list'>
                            <img src="/images/icon/infin.png" alt=""/>
                            <h3>
                                <span>Безлимит</span>
                            </h3>
                        </div>

                        <p>TAS-IX 6 Мбит/с на ADSL</p>



                        <h1>
                            90 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>

                        <div className="third-arrow">
                            <a href="#!">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className='price-item'>
                    <div className="price-item-child">
                        <h2>Платинум</h2>
                        <div className='speed-list'>
                            <img src="/images/icon/moon.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до с 01:00 до 13:00</span>
                            </h3>
                        </div>

                        <div className='speed-list'>
                            <img src="/images/icon/sun.png" alt=""/>
                            <h3>
                                <span>200 Мб/с</span>
                                <span>Скорость, до </span>
                            </h3>
                        </div>


                        <div className='speed-list'>
                            <img src="/images/icon/infin.png" alt=""/>
                            <h3>
                                <span>Безлимит</span>
                            </h3>
                        </div>

                        <p>TAS-IX 6 Мбит/с на ADSL</p>



                        <h1>
                            90 000
                        </h1>
                        <h5>
                            Сум / Месяц
                        </h5>

                        <div className="third-arrow">
                            <a href="#!">Подключить <img className="arrow-img-white" src="/images/icon/Arrow4.png" alt=""/></a>
                        </div>
                    </div>
                </div>





            </Slider>
        </div>
    );
};

export default PriceProvider;