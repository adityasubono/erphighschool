import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18n from "./helpers/i18next/i18n";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Container from "./components/layout";
import LoginAcademic from "./pages/Academic/LoginAcademic";

const AppIndex = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <Container>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/academic" component={LoginAcademic}/>
                </Switch>
            </Container>
        </I18nextProvider>
    );
};

export default AppIndex;
