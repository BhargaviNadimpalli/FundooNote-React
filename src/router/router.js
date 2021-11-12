import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateAccount from '../pages/signUp';
import Login from '../pages/signIn';
import AuthRoute from '../router/auth';
import ProtectedRoute from '../router/protected';
import DashBoard from '../pages/dashBoard';
import PageNotFound from '../components/pagenotfound';
function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <AuthRoute exact path="/" component={Login} />
                    <AuthRoute path = "/signUp" component = {CreateAccount} />
                    <>
                    <ProtectedRoute exact path = "/Dashboard" component = {DashBoard}/>
                    </>
                    <Route exact path="*" component={PageNotFound}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router;