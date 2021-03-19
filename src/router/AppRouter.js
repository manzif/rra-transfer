import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../views/About';
import Login from '../views/Login';
import Home from '../views/Home';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;