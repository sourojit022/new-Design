
import React from 'react';
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import Form from "../../src/Comp/Form";
import Card from "../Comp/Card";
import  Home from "../Comp/Home";
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";
export default function Routing() {
    return (
        <div>
            <BrowserRouter>
            <Form/>
                <Switch>
                 <Route path="/Home" component={Home} />
                  <Route exact path="/">
                 <Redirect to= "/Home"/>
                  </Route>
                  
                  <Route path="/Card" component={Card} />
                  <Route path="/Registration" component={Registration} />
                  <Route path="/ Login" component={ Login} />





                </Switch>

            </BrowserRouter>
        </div>
    );
}


