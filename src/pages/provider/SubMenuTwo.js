import React from 'react';
import {NavLink} from "react-router-dom";

const SubMenuTwo = () => {
    return (

            <div className="container  sub-menu-global " style={{marginTop: "70px"}}>
                <h2 className="font-family-medium">Наши сервисы</h2>

                <div>


                    <NavLink to="/main-provider" activeClassName="sub-menu">Интернет</NavLink>
                    <NavLink to="/maintv" activeClassName="sub-menu">IP TV</NavLink>

                </div>
            </div>

    );
};

export default SubMenuTwo;