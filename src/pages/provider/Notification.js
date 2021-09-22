import React from 'react';

const Notification = () => {
    return (
        <div className="notification container">
            <h2 className="font-family-medium">Уведомление</h2>
            <div className="notification-body">
           <p className="font-family-regular">
               Уважаемые абоненты! <br/>
               В связи с модернизационными работами на оборудовании компании в целях улучшения предоставляемых услуг
               17.09.2021 с 00.00-01.00 будет отсутствовать доступ в интернет. От лица компании приносим извинения за
               доставленные неудобства.
           </p>
            </div>
        </div>
    );
};

export default Notification;