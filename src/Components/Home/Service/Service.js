import React from 'react';
import Slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airnb from '../../../images/logos/airbnb.png'

import web from '../../../images/icons/service1.png'
import graphics from '../../../images/icons/service2.png'
import development from '../../../images/icons/service3.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    const serviceInfo=[
        {
            icon:web,
            name:  'Web and Mobile Design', 
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.   Qui   beatae nemo odio dolorum reiciendis voluptates atque, expedita ut suscipit adipisci!',
            background:'first'
        },
        {
            icon:graphics,
            name:  'Graphics Design', 
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.   Qui   beatae nemo odio dolorum reiciendis voluptates atque, expedita ut suscipit adipisci!',
            background:'middle'
        },
        {
            icon:development,
            name:  'Web Development ',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.   Qui   beatae nemo odio dolorum reiciendis voluptates atque, expedita ut suscipit adipisci!',
            background:'last'
        },
    ]
    return (
        <div>
             <div>
            <div class="d-flex justify-content-center " >
            
            <img style={{width: 70, height: 70,margin:'10px' }}  src={Slack}  alt=""/>
            <img style={{width: 70, height: 70, margin:'10px'}} src={google}  alt=""/>
            <img style={{width: 70, height: 70 , margin:'10px' }} src={uber}  alt=""/>
            <img style={{width: 70, height: 70 ,margin:'10px'}}  src={netflix}  alt=""/>
            <img style={{width: 70, height: 70, margin:'10px' }} src={airnb}  alt=""/>

          
            
        </div>

        <div className=" align-items-center ml-5 justify-content-center">
       <div className="row w-15 p-3">

          
       {
                serviceInfo.map(info=> <ServiceDetail info={info}  ></ServiceDetail>)
                
           }
       </div>
        </div>
            </div>
        </div>
    );
};

export default Service;