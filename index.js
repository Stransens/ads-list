/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import React from "react";

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './src/reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const application = () => {
      return <Provider store={store}>
            <App/>
      </Provider>
}

AppRegistry.registerComponent(appName, () => application);
