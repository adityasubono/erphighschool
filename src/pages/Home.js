import React, {Component} from 'react';
import {SettingMainMenu} from '../helpers/MainMenu/SettingMainMenu';

const Home = () => {

    return (

        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 justify-content-center">
            {SettingMainMenu.map((dataMenu, key) => (
                <div className="col-md-1 col-sm-6 col-xs-12" style={{width: "11rem"}}>
                    <div className="card border-0">
                        <div className="card-header bg-transparent text-center border-warning border-3">
                            <p className="card-text fw-bold"
                               style={{
                                   fontSize: '12px'
                               }}
                            >{dataMenu.name}</p>
                        </div>
                        <a href={dataMenu.path}>
                            <img src={dataMenu.icon} className="card-img-top" alt="..."/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
