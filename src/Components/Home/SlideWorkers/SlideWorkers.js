import React from 'react';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
// import './SlideWorkers.css'

const SlideWorkers = () => {
  return (
    <div className="mt-3 m-3">
      <h1 style={{textAlign: 'center'}}  >Here are some of our work</h1>
      <div className="row slide-container" >
         
        <div className="col-md-4 " >
          <img src={carousel1} style={{width: 600, height: 400, backgroundColor: 'powderblue'}} alt=""></img>
        </div>
        <div className="col-md-4 w-75">
        <img src={carousel2} style={{width: 600, height: 400, backgroundColor: 'powderblue'}} alt=""></img>
        </div>
        <div className="col-md-4 w-75">
        <img src={carousel3} style={{width: 600, height: 400, backgroundColor: 'powderblue'}} alt=""></img>
        </div>
      </div>
     
    </div>
  );
};

export default SlideWorkers;