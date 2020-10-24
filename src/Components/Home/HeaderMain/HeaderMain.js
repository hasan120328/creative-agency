import React from 'react';
import frameImage from '../../../images/logos/Frame.png'


const HeaderMain = () => {
    return (
        <div>
            <div className="row ml-5 ">
                <div className="col-md-5 justify-content-center">
                    <h1>Let's grow your <br/> Brand to the <br/> next level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic quam quos explicabo unde porro temporibus delectus, pariatur minima molestias.</p>
                    <button className="button-color">Hire Us</button>
                </div>
                <div className="col-md-7 ">
                    <img style={{width: 600, height: 300, backgroundColor: 'powderblue'}} src={frameImage} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;