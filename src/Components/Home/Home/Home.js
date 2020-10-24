import React from 'react';
import Client from '../Client/Client';

import Header from '../Header/Header';
import SendButton from '../SendButton/SendButton';
import Service from '../Service/Service';
import SlideWorkers from '../SlideWorkers/SlideWorkers';







const Home = () => {
    return (
        <div>
            <Header></Header>
             <Service></Service>
              <SlideWorkers></SlideWorkers>
              <Client></Client>
              <SendButton></SendButton>
        </div>
    );
};

export default Home;