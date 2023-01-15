import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import NavBar from "./components/NavBar";
import Confirmation from "./components/Confirmation";


class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/appointment" component={Appointment} />
                    <Route path="/confirmation" component={Confirmation} />
                </Switch>
            </Router>
        );
    }
}


export default App;
