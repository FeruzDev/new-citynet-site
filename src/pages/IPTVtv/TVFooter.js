import React from 'react';

const TvFooter = () => {
    return (
        <div className="tv-footer">
            <div className="container tv-footer-child">
                <div className="row">
                    <div className="col-md-5">
                        <img src="images/icon/tvfooter.png" alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h4 className="font-family-medium">Проверьте доступность услуг</h4>
                        <p>Узнайте, какие услуги можно подключить по вашему адресу</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TvFooter;