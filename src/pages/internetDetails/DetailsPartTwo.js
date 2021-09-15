import React from 'react';

const DetailsPartTwo = () => {
    return (
        <div className="details-part-two position-relative">

            <div className="container details-part-two-child">
                <div className="row">
                    <div className="col-md-4  d-flex">
                        <div><img src="images/icon/detailsone.png" alt=""/></div>
                        <div>

                            <h4> Высокая скорость</h4>
                            <p>Подключение высокоскоростного и безлимитного Интернета  </p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ">
                        <div><img src="images/icon/detailtwo.png" alt=""/></div>
                        <div>
                            <h4>Преимущества</h4>
                            <p>Уникальные игровые бонусы</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div><img src="images/icon/detailsthree.png" alt=""/></div>
                        <div>
                            <h4>Приоритизация игрового трафика</h4>
                            <p>Прямое подключение к серверам</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DetailsPartTwo;