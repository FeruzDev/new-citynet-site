import React from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";
import {toast} from "react-toastify";

const ContactForma = () => {

    const send =(value)=>{



        let bigData = new FormData();
        bigData.append("full_name", document.getElementById('fullNameC').value)
        bigData.append("email", document.getElementById('emailC').value)
        bigData.append("phone", document.getElementById('numberC').value)
        bigData.append("message", document.getElementById('messageC').value)


        axios.post(API_PATH_RU + "device/v1/request/" , bigData)
            .then(res => {
                toast.success("Успешно отправлен")
              document.getElementById('fullNameC').value= ""
              document.getElementById('emailC').value= ""
              document.getElementById('numberC').value= ""
              document.getElementById('messageC').value= ""

            })
            .catch(err =>{
                toast.error("Oшибка")
            })


    }




    return (
        <div>
            <div className="Contact-forma position-relative">
                <div className="line999">
                    <div className="line-insert">
                        <svg width="567" height="47" viewBox="0 0 567 47" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M853.1 1H731.997L693.803 38.2624H454.702L435.062 18.622H262.18L236.685 42.0764H5.11438"
                                stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                            <path
                                d="M5.3461 46.4236C2.93957 46.4236 0.998837 44.4828 0.998837 42.0763C0.998837 39.6698 2.93957 37.729 5.3461 37.729C7.75263 37.729 9.69336 39.6698 9.69336 42.0763C9.69336 44.4828 7.75263 46.4236 5.3461 46.4236Z"
                                fill="#0086E7"></path>
                            <g opacity="0.4">
                                <path
                                    d="M782.66 42.2625L661.557 42.2624L623.363 5.00003L386.098 5.00001L364.499 36.8026L252.5 36.8026L227.005 13.3482L139.114 13.3482"
                                    stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"></path>
                                <path
                                    d="M139.346 9.001C136.94 9.001 134.999 10.9417 134.999 13.3483C134.999 15.7548 136.94 17.6956 139.346 17.6956C141.753 17.6956 143.693 15.7548 143.693 13.3483C143.693 10.9417 141.753 9.001 139.346 9.001Z"
                                    fill="#0086E7"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="container ">
                    <div className="Contact-forma-child">
                        <form className="row">
                            <div className=" col-md-6 ">
                                <h4 className="font-family-medium">Свяжитесь с нами</h4>
                                <div className="row">
                                    <div className="col-md-12 w-100">
                                        <input required type="text" className="form-control" id="fullNameC" placeholder="Полное имя"/>

                                    </div>
                                    <div className="col-md-12">
                                        <input required  type="email" className="form-control "  id="emailC" placeholder="Почта"/>
                                        <input required type="text" className="form-control" id="numberC" placeholder="Контакный телефон"/>
                                    </div>
                                    <input type="text"  required  className="form-control m-3 text"  id="messageC"placeholder="Сообшения"/>
                                    <div className="third-arrow ml-3">
                                        <button onClick={() => send()}  className="font-family-medium"> <img className="arrow-img-white" src="/images/icon/Arrow4.png"
                                                           alt=""/>Отправить заявку</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pt-3 pl-5 ">
                                <p>Воспользуйтесь формой слева, чтобы задать ваш вопрос, оставить отзыв или
                                    предложение.</p>
                                <div className="contact-in">
                                    <img src="images/icon/contacctimg1.png" alt=""/>
                                    <a href="#">+99890 71 202 11 11</a>
                                </div>
                                <div className="contact-in">
                                    <img src="images/icon/contactimages2.png" alt=""/>
                                    <a href="#">info@citynet.uz</a>
                                </div>
                                <div className="contact-in">
                                    <img src="images/icon/contactimages3.png" alt=""/>
                                    <a href="#" >Узбекистан, 100066, г. Ташкент, Шайхантахурский район,
                                        ул. Кичик халка йули, 2</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=675&amp;height=400&amp;hl=en&amp;q=citynet&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                </div>

                <div className="line999w2">
                    <div className="line-insert">
                        <svg width="642" height="82" viewBox="0 0 642 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-211 45.4236L-89.8972 45.4236L-51.7032 8.16121L187.397 8.16125L207.038 27.8016L379.92 27.8017L405.415 4.34726L636.985 4.34731" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M636.753 2.35814e-05C639.159 2.44931e-05 641.1 1.94077 641.1 4.3473C641.1 6.75383 639.159 8.69458 636.753 8.69458C634.346 8.69458 632.406 6.75383 632.406 4.34729C632.406 1.94076 634.346 2.26697e-05 636.753 2.35814e-05Z" fill="#0086E7"/>
                            <path d="M-287 80.4238L-165.897 80.4238L-127.703 43.1614L315.959 43.1613L335.6 62.8017L447.6 62.8017L473.095 39.3473L560.985 39.3472" stroke="#0086E7" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M560.753 35C563.159 35 565.1 36.9408 565.1 39.3473C565.1 41.7538 563.159 43.6946 560.753 43.6946C558.346 43.6946 556.405 41.7538 556.405 39.3473C556.405 36.9408 558.346 35 560.753 35Z" fill="#0086E7"/>
                        </svg>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default ContactForma;