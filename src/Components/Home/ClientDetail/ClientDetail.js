import React from 'react';

const ClientDetail = ({totalInfo}) => {
    return (
        <div >
             <div className="col-md-3  " >
            <img src={totalInfo.img} alt=""></img>
            <h1>{totalInfo.name}</h1>
            <h4>{totalInfo.title}</h4>
            <p>{totalInfo.lorem}</p>
            </div>
        </div>
    );
};

export default ClientDetail;