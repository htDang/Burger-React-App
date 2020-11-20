import React, { Component } from 'react';
// import styles from './App.module.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import { Route, Switch, withRouter } from 'react-router-dom';
import Orders from './container/Orders/Orders';

import Auth from './container/Auth/Auth';
import Logout from './container/Auth/Logout/Logout';

import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route component={Checkout} path="/checkout" />
            <Route component={Orders} path="/orders" />
            <Route component={Auth} path="/auth" />
            <Route component={Logout} path="/logout" />
            <Route component={BurgerBuilder} path="/" exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
