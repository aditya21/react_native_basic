import { Navigation } from 'react-native-navigation';
import Login from './components/login';

export function registerScreens(store, Provider){
    Navigation.registerComponent('app.Login', () => Login, store, Provider);
}
