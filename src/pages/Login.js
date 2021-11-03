import React from 'react';
import logo from '../assets/images/logo.png'



const Login = () => {
    return (
        <div>
            <div className="card rounded-2 p-5">
                <img className="img-fluid" src={logo}/>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label font-weight-bold">NIK</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label font-weight-bold">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
);
}

export default Login;
