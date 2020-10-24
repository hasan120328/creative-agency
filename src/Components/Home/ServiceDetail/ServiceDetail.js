import React from 'react';

const ServiceDetail = ({info}) => {
    return (
        <div className="col-md-4 align-items-center justify-content-center service-container">
           
            <div className= {`info-${info.background}`} >

                <img src={info.icon}></img>
                <h1>{info.name}</h1>
                 <p>{info.description}</p>
           
            </div>
        </div>
    );
};

export default ServiceDetail;
// "serviceMore-${serviceMore.background}
//{` serviceMore-${serviceMore.background}`}
 {/* <img src={serviceMore.icon} className="img-fluid" alt=""/> */}
           