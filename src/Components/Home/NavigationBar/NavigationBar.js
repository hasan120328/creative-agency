import React from 'react';
import creative from '../../../images/logos/logo.png'

const NavigationBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand w-25 " href="#"><img class="w-50 p-3"  src={creative} alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link p-5 " href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link p-5 " href="#">Link</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link p-5 " href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link p-5 " href="#">Link</a>
      </li>
      <button class="w-12  button-color " type="button"  >
    Login
  </button>
 
    </ul>
    
  </div>
</nav>
        </div>
    );
};

export default NavigationBar;