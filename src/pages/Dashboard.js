import React, {Component} from 'react';
import {SettingMainMenu} from '../helpers/MainMenu/SettingMainMenu';

const Dashboard = () => {

    return (

        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 justify-content-center">
            {SettingMainMenu.map((dataMenu, key) => (
                <div className="col-md-1 col-sm-6 col-xs-12" style={{width: "11rem"}}>
                    <div className="card border-0">
                        <div className="card-header bg-transparent text-center">
                            <p className="card-text fw-bold"
                               style={{
                                   fontSize: '11px'
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

export default Dashboard;
