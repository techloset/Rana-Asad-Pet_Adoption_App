import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stack/StackNavigation';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {store} from './src/store/Store';
import {listenForAuthStateChanges} from './src/store/slice/userSlice';

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
        <StatusBar backgroundColor={'#eaeaea'} barStyle={'dark-content'} />
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
