import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stack/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      <StatusBar backgroundColor={'#eaeaea'} barStyle={'dark-content'} />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
