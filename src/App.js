import React, { Component } from 'react';
// import styles from './App.module.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './container/Orders/Orders';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route component={Checkout} path="/checkout" />
            <Route component={Orders} path="/orders" />
            <Route component={BurgerBuilder} path="/" exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
