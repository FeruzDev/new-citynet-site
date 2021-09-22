import React from 'react';
import ESaidbar from "./ESaidbar";
import {Link} from "react-router-dom";
import NavbarGeneral from "../navbar/NavbarGeneral";
import DisplayNavbar from "../navbar/DisplayNavbar";

class MainEquipment extends React.Component {
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
                title: 'Системы отображения'
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
            <div className="equipment position-relative overflow-hidden">
                <NavbarGeneral/>
                <DisplayNavbar/>

                <div className="container equipment-child">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="saidbar">
                                <h4 className="font-family-medium">Каталог товаров</h4>
                                {
                                    this.getEquipments().map((e, index) => {
                                        return (
                                            <div className="saidbar-between">
                                                <span className={this.state.active === index ? 'active' : ''}
                                                      onClick={this.toggleActive.bind(this, index)} >{e.title}</span>
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
                            <p>Главная > Каталог > ITC Audio T-6708 Сетевой аудио адаптер, без встроенного усилителя</p>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src="images/icon/itc.png" alt=""/>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6">
                                            <img src="images/icon/itvsmile.png" alt=""/>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <img src="images/icon/itvsmile.png" alt=""/>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <img src="images/icon/itvsmile.png" alt=""/>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <img src="images/icon/itvsmile.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <h4  className="font-family-medium">ITC Audio T-6708 Сетевой аудио адаптер, без встроенного усилителя</h4>
                                    <div>Сетевой Аудио адаптер IP.
                                        Без усилителя
                                    </div>
                                    <h3  className="font-family-medium">3 703 197 сум</h3>
                                    <span><img src="images/icon/stock .png" alt=""/></span>
                                    <p>Запросить дилерскую цену</p>
                                    <button type="button" className="btn btn-primary"><span>Инфо</span></button>
                                </div>
                            </div>
                            <div className="equipment-footer">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary">О продукте</button>
                                    <button type="button" className="btn btn-link">Спецификация</button>
                                </div>
                                <h4>ОПИСАНИЕ ITC Audio T-6708 Сетевой аудио адаптер, без встроенного усилителя</h4>
                            </div>
                            <p>IP акустическая система используется для приема цифровых (TCP/IP) аудио сигналов с целью
                                усиления и дальнейшего воспроизведения
                            </p>
                            <p>
                                Используется для построения систем автоматического аварийного оповещения и музыкальной трансляции на базе дополнительного оборудования
                            </p>
                            <p>
                                Работает в составе IP системы при включенном сервере (компьютере). Номер акустической системы настраивается с помощью программного обеспечения ITC T-6700R
                            </p>
                        </div>
                    </div>
                </div>
                <div className="line34">
                    <div className="line-insert">
                        <svg width="445" height="47" viewBox="0 0 445 47" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M-408 1L-286.897 1.00001L-248.703 38.2624L-9.60279 38.2624L10.0376 18.6221L182.92 18.6221L208.415 42.0765L439.985 42.0765"
                                stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                            <path
                                d="M439.754 46.4238C442.16 46.4238 444.101 44.4831 444.101 42.0765C444.101 39.67 442.16 37.7292 439.754 37.7292C437.347 37.7292 435.406 39.67 435.406 42.0765C435.406 44.4831 437.347 46.4238 439.754 46.4238Z"
                                fill="#0086E7"></path>
                            <g opacity="0.4">
                                <path
                                    d="M-337.561 42.2625L-216.458 42.2625L-178.264 5.00005L59.0013 5.00005L80.6006 36.8027L192.6 36.8027L218.095 13.3483L305.985 13.3483"
                                    stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                                <path
                                    d="M305.754 9.001C308.16 9.001 310.101 10.9417 310.101 13.3483C310.101 15.7548 308.16 17.6956 305.754 17.6956C303.347 17.6956 301.406 15.7548 301.406 13.3483C301.406 10.9417 303.347 9.001 305.754 9.001Z"
                                    fill="#0086E7"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
};

export default MainEquipment;