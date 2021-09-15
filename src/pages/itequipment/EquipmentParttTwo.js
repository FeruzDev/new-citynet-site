import React from 'react';
import {NavLink} from "react-router-dom";


class EquipmentPartTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    toggleActive(index) {
        this.setState({
            active: index
        });
    }

    getEquipments() {
        let equipments = [
            {
                title: 'IP Аудио системы и Интерком'
            },
            {
                title: 'Система эвакуации при пожаре'
            },
            {
                title: 'Громкоговорители'
            },
            {
                title: 'Профессиональные звуковые системы'
            },
            {
                title: 'Системы отображения',

            },
            {
                title: 'Коммутационное оборудование'
            },
            {
                title: 'Распродажа'
            },
        ];

        return equipments;
    }

    render() {
        return (
            <div className="equipment-part-two">
                <div className="container equipment-part-two-child">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="saidbar">
                                <h4>Каталог товаров</h4>
                                {
                                    this.getEquipments().map((e, index) => {
                                        return (
                                            <div className="saidbar-between">
                                                <span className={this.state.active === index ? 'active' : ''}
                                                      onClick={this.toggleActive.bind(this, index)}>{e.title}
                                                
                                                </span>
                                                <img
                                                    src={`images/icon/${this.state.active === index ? 'arrow-down-s-line.svg' : 'arrow-right-s-line.svg'}`}
                                                    alt=""/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="d-flex eqment">
                                <div className="input-group ml-3">
                                    <input type="text" className="form-control" placeholder="Поиск товара..."/>
                                    <div className="search">
                                        <a href="https://www.google.com/"><img src="images/icon/search.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Сортировка</option>
                                        <option>Сортировка</option>
                                        <option>Сортировка</option>
                                        <option>Сортировка</option>
                                        <option>Сортировка</option>
                                    </select>
                                </div>
                                <div><img src="images/icon/align.png" alt=""/></div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                                    <div className="card-body">
                                        <img src="images/icon/stock .png" alt=""/>
                                        <span><img src="images/icon/itcPartone.png" alt=""/></span>
                                        <h4>IP Аудио</h4>
                                        <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                            x
                                        </p>

                                        <h3>
                                            <del></del>
                                            <br/>3 703 197 сум
                                        </h3>
                                        <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                            <button type="button" className="btn btn-primary">Подробнее</button>
                                        </NavLink></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                                    <div className="card-body">
                                        <img src="images/icon/stock .png" alt=""/>
                                        <span><img src="images/icon/itcpartwo.png" alt=""/></span>
                                        <h4>IP Аудио</h4>
                                        <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                            x
                                        </p>

                                        <h3>
                                            <del>3 703 197 сум</del>
                                            <br/>3 703 197 сум
                                        </h3>
                                        <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                            <button type="button" className="btn btn-primary">Подробнее</button>
                                        </NavLink></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                                    <div className="card-body">
                                        <img src="images/icon/stock .png" alt=""/>
                                        <span><img src="images/icon/itcpartree.png" alt=""/></span>
                                        <h4>IP Аудио</h4>
                                        <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                            x
                                        </p>

                                        <h3>
                                            <del></del>
                                            <br/>3 703 197 сум
                                        </h3>
                                        <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                            <button type="button" className="btn btn-primary">Подробнее</button>
                                        </NavLink></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                                    <div className="card-body">
                                        <img src="images/icon/stock .png" alt=""/>
                                        <span><img src="images/icon/itcpartfour.png" alt=""/></span>
                                        <h4>IP Аудио</h4>
                                        <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                            x
                                        </p>

                                        <h3>
                                            <del></del>
                                            <br/>3 703 197 сум
                                        </h3>
                                        <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                            <button type="button" className="btn btn-primary">Подробнее</button>
                                        </NavLink></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                                    <div className="card-body">
                                        <img src="images/icon/stock .png" alt=""/>
                                        <span><img src="images/icon/itcPartone.png" alt=""/></span>
                                        <h4>IP Аудио</h4>
                                        <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                            x
                                        </p>

                                        <h3>
                                            <del></del>
                                            <br/>3 703 197 сум
                                        </h3>
                                        <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                            <button type="button" className="btn btn-primary">Подробнее</button>
                                        </NavLink></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                                    <div className="card-body">
                                        <img src="images/icon/stock .png" alt=""/>
                                        <span><img src="images/icon/itcpartwo.png" alt=""/></span>
                                        <h4>IP Аудио</h4>
                                        <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                            x
                                        </p>

                                        <h3>
                                            <del>3 703 197 сум</del>
                                            <br/>3 703 197 сум
                                        </h3>
                                        <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                            <button type="button" className="btn btn-primary">Подробнее</button>
                                        </NavLink></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                                    <div className="card-body">
                                        <img src="images/icon/stock .png" alt=""/>
                                        <span><img src="images/icon/itcpartree.png" alt=""/></span>
                                        <h4>IP Аудио</h4>
                                        <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                            x
                                        </p>

                                        <h3>
                                            <del></del>
                                            <br/>3 703 197 сум
                                        </h3>
                                        <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                            <button type="button" className="btn btn-primary">Подробнее</button>
                                        </NavLink></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6" >
                                    <div className="card-body">
                                        <img src="images/icon/stock .png" alt=""/>
                                        <span><img src="images/icon/itcpartfour.png" alt=""/></span>
                                        <h4>IP Аудио</h4>
                                        <p>ITC Audio T-6708 Сетевой аудио адаптер,
                                            x
                                        </p>

                                        <h3>
                                            <del></del>
                                            <br/>3 703 197 сум
                                        </h3>
                                        <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                            <button type="button" className="btn btn-primary">Подробнее</button>
                                        </NavLink></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default EquipmentPartTwo;