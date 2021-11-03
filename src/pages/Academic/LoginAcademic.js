import React from 'react';
import logo from "../../assets/images/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faLock} from "@fortawesome/free-solid-svg-icons";
const styles = {
    login: {
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '600px',
        height: 'auto',
        border: '1px solid #9C9C9C',
        backgroundColor: '#fffefe',
    },
};
const LoginAcademic = () => {
        return (
            <div>
                <div className="card rounded-2 p-5" style={styles.login}>
                    <img className="img-fluid" src={logo}/>
                    <h2 className="text-center py-3">Academic Information System </h2>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            <FontAwesomeIcon icon={faUser}/>
                        </span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3"> <FontAwesomeIcon icon={faLock}/></span>
                        <input type="password" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    </div>

                    <div className="mb-3">
                        <a type="button" href="/dashborad-academic" className="btn btn-primary btn-lg me-3">Login</a>
                        <a type="button" href="/home" className="btn btn-outline-secondary btn-lg">Cancel</a>
                    </div>
                </div>
            </div>
        );

}

export default LoginAcademic;
