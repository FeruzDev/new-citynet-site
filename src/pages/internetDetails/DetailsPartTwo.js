import React from 'react';

const DetailsPartTwo = () => {
    return (
        <div className="details-part-two position-relative">

            <div className="container details-part-two-child">
                <div className="row">
                    <div data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="700"
                         className="col-md-4  d-flex">
                        <div><img src="images/icon/detailsone.png" alt=""/></div>
                        <div>

                            <h4 className="font-family-medium"> Высокая скорость</h4>
                            <p>Подключение высокоскоростного и безлимитного Интернета  </p>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="700"
                        data-aos-delay="200"
                        className="col-md-4 d-flex ">
                        <div><img src="images/icon/detailtwo.png" alt=""/></div>
                        <div>
                            <h4 className="font-family-medium">Преимущества</h4>
                            <p>Уникальные игровые бонусы</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="700"
                         data-aos-delay="400"
                         className="col-md-4 d-flex">
                        <div><img src="images/icon/detailsthree.png" alt=""/></div>
                        <div>
                            <h4 className="font-family-medium">Приоритизация игрового трафика</h4>
                            <p>Прямое подключение к серверам</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DetailsPartTwo;