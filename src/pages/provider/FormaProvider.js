import React from 'react';

const FormaProvider= () => {
    return (
        <div className="traffic-part-one position-relative">
            <div className="container traffic-part-one-child">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/icon/internettraffic.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="font-family-medium">Проверьте доступность услуг</h4>
                        <p>Узнайте, какие услуги можно подключить по вашему адресу</p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Toshkent</option>
                                        <option>Farg'ona</option>
                                        <option>Andijon</option>
                                        <option>Jizzax</option>
                                        <option>Samarqand</option>
                                        <option>Buxoro</option>
                                        <option>Surxandaryo</option>
                                        <option>Qashqadaryo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Ваш район</option>
                                        <option>Ваш район</option>
                                        <option>Ваш район</option>
                                        <option>Ваш район</option>
                                        <option>Ваш район</option>

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Улица</option>
                                        <option>Улица</option>
                                        <option>Улица</option>
                                        <option>Улица</option>
                                        <option>Улица</option>
                                        <option>Улица</option>

                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormaProvider;