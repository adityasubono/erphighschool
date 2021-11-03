import React from 'react';
import logo from '../assets/images/logo.png'

const styles = {
    login: {
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '600px',
        height: 'auto',
        border: '1px solid #9C9C9C',
        backgroundColor: '#EAEAEA'
    },
};

const Login = () => {
    return (
        <div>
            <div className="card rounded-2 p-5" style={styles.login}>
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
                    <a type="button" href="/dashboard" className="btn btn-primary">Login</a>
                </div>
            </div>
        </div>
);
}

export default Login;
