
import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import AssetsBuilder from './container/AssetsBuilder/AssetsBuilder'
import Main from './hoc/Main/Main';
import CurrencyBuilder from './container/CurrencyBuilder/CurrencyBuilder'
class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/"  exact component={AssetsBuilder} />
        <Route path="/currency/:id"   component={CurrencyBuilder} />
      </Switch>
    )
    return (
      <div className="App">
        <Main >
          {routes}
        </Main>
      </div>
    );
  }
}



export default App;
