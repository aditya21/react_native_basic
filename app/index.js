import React, {Component} from 'react';
import { AppRegistry, AsyncStorage, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';
import Login from './components/login';
import { persistStore } from 'redux-persist';
import { Spinner } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { registerScreens } from './screens';
import { Navigation } from 'react-native-navigation';

const store = configureStore();

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
          screen: {
            screen: 'app.Login', 
            title: 'Welcome', 
            navigatorStyle: {}, 
            navigatorButtons: {} 
            },
            drawer: {},
            passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
            animationType: 'slide-down' 
        });