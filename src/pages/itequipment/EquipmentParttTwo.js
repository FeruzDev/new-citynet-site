
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, NavLink} from "react-router-dom";
import {API_PATH_RU} from "../../tools/constants";

const EquipmentParttTwo = (props) => {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



    const [category, setCategory] = useState([])


    const [allProduct, setProduct] =useState([])
    useEffect(()=>{
        axios.get(API_PATH_RU + "device/v1/category/")
            .then(res=>{
                setCategory(res.data)
            })

            .catch(err =>{
                console.log(err)
            })



        axios.get(API_PATH_RU + "device/v1/product/")
            .then(res =>{
                setProduct(res.data)
            })
            .catch(err =>{
                console.log(err)
            })

    }, [])




    const [select, setSelect] = useState(null)

    const getProduct =(id)=>{


        setSelect(id)

        axios.get(API_PATH_RU + "device/v1/product/?category=" +  id )
            .then(res =>{
                setProduct(res.data)
            })
            .catch(err =>{
                console.log(err)
            })


        // console.log(allProduct)
    }

    const [ch, setCh] = useState(null)
    const openChild =(data)=>{


        // console.log(data.children)
        setCh(data.id)

        getProduct(data.id)
    }


    const [load, setLoad] =useState(8)
    const loadMore = () => {

        setLoad(load + 4)
    }




    return (
        <div className="equipment-part-two">
                            <div id="catalog" className="container equipment-part-two-child">
                                 <div className="row">
                                     <div className="col-md-3 ">
                                         <div className="saidbar">
                                             <h4  className="font-family-medium">Каталог товаров</h4>

                                             {
                                                 category?.map(item =>(

                                                     <div >
                                                         <button className={ch == item.id ? "bg-primary text-white w-100 text-left":  "w-100 text-left"} onClick={() => openChild(item)}>{item.title}</button>
                                                         <div className="btn-category-list  ">
                                                             <span className="pl-3 d-block ">{item.children?.map(item2 => (
                                                                 <button className={ch == item.id? "d-block w-100 text-left  child-button " : "d-none child-button"}

                                                                         onClick={ (e) => getProduct(item2.id)} >  {item2.title } </button>
                                                             ))}
                                                             </span>
                                                         </div>
                                                     </div>
                                                 ))
                                             }

                             </div>
                        </div>
                        <div className="col-md-9">



                            <div className="row mb-4">

                                {
                                    allProduct?.slice(0, load).map(item =>(
                                        <Link  to={"/itequipment/equipment/" + item.id} className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                                            <div className="card-body">
                                                <img src="images/icon/stock.png" alt=""/>
                                                <span><img  src= {item.images[0]?.get_img_url} alt=""/></span>
                                                <h4>{item.title}</h4>
                                                <p dangerouslySetInnerHTML={{__html:   item.main_content.length > 50 ? item.main_content.slice(0, 50) + "..." : item.main_content }}  />


                                                <h3  className="font-family-medium">
                                                    <del></del>
                                                    <br/>{item.price}
                                                </h3>
                                                <div className="d-flex justify-content-center mt-3"><NavLink to="/equipment">
                                                    <Link  to={"/itequipment/equipment/" + item.id} className="btn btn-primary font-family-medium">Подробнее</Link>
                                                </NavLink>
                                                </div>
                                            </div>
                                        </Link>

                                    ))
                                }





                            </div>
                            {allProduct.length > 8 ?

                                <div className="load-btn ">


                                    <button onClick={() => loadMore()}>Посмотреть больше</button>
                                </div>
                                :
                                ""
                                }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default EquipmentParttTwo;