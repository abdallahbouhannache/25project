import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Store from './components/Store';
import Posts from './components/Posts/Posts';
import { Provider, connect } from 'react-redux';

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {

  componentWillMount() {

  }
  render() {
    return (

      <Provider store={Store}>
        <div className="AppMain">
          <Posts />
        </div>
      </Provider>

    );
  }
}
/* const mapStateToProps = state => ({
  state:
}) */


export default App;
