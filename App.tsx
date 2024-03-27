import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stack/StackNavigation';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {store} from './src/store/store';
import {listenForAuthStateChanges} from './src/store/slice/userSlice';
import Toast from 'react-native-toast-message';

export default function App() {
  useEffect(() => {
    store.dispatch(listenForAuthStateChanges());
  }, []);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={'#f2f2f2'} barStyle={'dark-content'} />
        <StackNavigation />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
