
import React from 'react';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import ClientDetail from '../ClientDetail/ClientDetail';

const Client = () => {
    const clientInfos=[
        {
            img:customer1,
            name:'Nash patric',
            title:'CEO Manpol',
            lorem:'Lorem ipsum dolor sit llendus ipsam inventore officiis incidunt ipsum, exercitationem numquam.'
        },
        {
          img:customer2,
          name:'Miriam Barron',
          title:'CEO Manpol',
          lorem:'Lorem ipsum dolor sit amet conse ipsam inventore officiis incidunt ipsum, exercitationem numquam.'
      },
      {
          img:customer3,
          name:'Bria Malon',
          title:'CEO Manpol',
          lorem:'Lorem ipsum dolor sit ametrepellendus ipsam inventore officiis incidunt ipsum, exercitationem numquam.'
      },
    ];
    return (
        <div>
            <div>
            <h1 className="text-center">Clients Feedback</h1>
            </div>
           <div className="row" >
              <div className="d-flex justify-content-center p-2"  >
              {
                clientInfos.map(clientInfo =><ClientDetail totalInfo={clientInfo}  ></ClientDetail>)
            }
              </div>
           </div>
        </div>
    );
};

export default Client;