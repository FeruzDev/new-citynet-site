import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH_RU} from "../../tools/constants";

const Notification = () => {
    const [not ,setNot] = useState([])


    useEffect(() => {



        axios.get(API_PATH_RU + "provider/v1/notifications/")
            .then(res => {
                setNot(res.data)
            })
            .catch(err =>{
                console.log(err)
            })

    }, [])


    return (
        <div className="notification container">


            {

                not?.slice(0, 1).map(item => (
                    <>

                        <h2 className="font-family-medium" dangerouslySetInnerHTML={{__html: (item.title)}} / >
                        <div className="notification-body">
                            <p dangerouslySetInnerHTML={{__html: (item.content)}} className="font-family-regular" />

                        </div>
                    </>
                ))



            }

        </div>
    );
};

export default Notification;