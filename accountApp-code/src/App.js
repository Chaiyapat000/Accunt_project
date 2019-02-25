/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './dataflow/reducer'
import Testtable from './component/presentational/testtable'
// new import
import Controloutcomecontainer from './component/container/Controloutcomecontainer'
import { RootStack } from '../src/navigator/RootStack'
//
import Accountcon from './component/container/Accountcontainer'
import Paycontainer from './component/container/Paycontainer'


const store = createStore(reducers, applyMiddleware(createLogger()))




export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
        {/* <Accountcon /> */}
        {/* <Paycontainer /> */}
        {/* <Testtable /> */}

      </Provider>

    );
  }
}

