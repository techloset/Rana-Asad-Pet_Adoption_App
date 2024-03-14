import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import First from './First';
import Second from './Second';

const Drawer = createDrawerNavigator();

function Drawerrr() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="First" component={First} />
      <Drawer.Screen name="Second" component={Second} />
    </Drawer.Navigator>
  );
}

export default Drawerrr;

const styles = StyleSheet.create({});
