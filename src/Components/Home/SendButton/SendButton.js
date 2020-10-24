import React from 'react';

const SendButton = () => {
    const handleBlur={ 

    };
const handleFileChange={ 


};
const handleSubmit={

};
    return (
  
       <div>
           
        <div className="row mb-5 " style={{backgroundColor:"#FBD062", padding:'12px'}}>
             <div className="col-md-5 justify-content-center m-5">
               <h1>Let's us handle <br/> your project, Professionally</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum laboriosam exercitationem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus rem facilis eligendi fugit tempora!.</p>
           </div>
           <div className="col-md-5">
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputPassword1">Name</label> */}
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name/your company name" />
                    </div>
                    <dv className="form-group ">
                    {/* <label htmlFor="exampleInputPassword1">Name</label> */}
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="write your message" />
                    </dv>
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div> */}
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
        </div>
           
        </div>
                <p className="text-center ">copyright {(new Date()).getFullYear()}</p> <br />
       </div>

        
    );
};

export default SendButton;