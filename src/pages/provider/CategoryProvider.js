import React from 'react';

const CategoryProvider = () => {
    return (
        <div className='category-provider'>
            <div className="row">
                <div className="col-md-4">
                    <div className="category-box">
                        <h2>Интернет</h2>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="category-box">
                       <h2> IP TV</h2>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="category-box">
                       <h2> IP телефония</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProvider;