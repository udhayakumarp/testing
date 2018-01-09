import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import Thanks from "./components/Thanks";
import Timeline from "./components/Timeline";
import Profile from "./components/Profile";

import Form1 from './components/RegisterForms/Form1';
import 'react-select/dist/react-select.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.userArr = [];
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }
  render(){
    return(
        <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
          <Route path={"/"} component={Root}>
            <IndexRoute component={Home}/>
            <Route path={"casting"} component={Home}/>
            <Route path={"timeline"} component={Timeline} userArr={this.userArr}/>
            <Route path={"thanks"} component={Thanks}/>
            <Route path={"form"} component={Form1}/>
            <Route path={"profile"} component={Profile}/>
          </Route>
        </Router>
    );
  }
}
