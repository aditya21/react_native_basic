import React, {Component} from 'react';
import { AppRegistry, AsyncStorage, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import Login from './app/components/login';
import { persistStore } from 'redux-persist';
import { Spinner } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react'

export default class App extends Component {
    
    render() {
        return (
        
                <Provider store={store}>
                    <PersistGate loading={<Spinner />} persistor={persistor}>
                        <Login />
                    </PersistGate>
                </Provider>
            


        )
    }
}
