import React from "react";
import { Route, Switch } from 'react-router-dom';
import Main from '../components/page/Main'
import Header from "./common/Header";
import Account from "./page/Account";
import Login from "./page/Login";

const App = () => {
    return (
        <div>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/main" component={Main}></Route>
                    <Route path="/membership-fee" component={Account}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;