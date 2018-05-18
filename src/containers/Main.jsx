import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Apps from './Apps';
import Filters from './Filters';

const Home = (Home) => {
    return (<h1>This is home</h1>)
}

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                {/* Оба /roster и /roster/:number начинаются с /roster */}
                <Route path='/apps' component={Apps}/>
                <Route path='/fltrs' component={Filters}/>
            </Switch>
        );
    }
}

export default Main;