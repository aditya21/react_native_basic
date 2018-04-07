import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate, persistStore, persistReducer, persistCombineReducers } from 'redux-persist';

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage
};
const persistReducer1 = persistReducer(persistConfig, rootReducer);

export default function configureStore(){
    const store = createStore(persistReducer1);
    const persistor = persistStore(store);

    return { persistor, store }
}