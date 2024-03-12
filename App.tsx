import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './src/screens/login/Login';
import SignUp from './src/screens/signUp/SignUp';
import ForgotPassword from './src/screens/forgotPassword/ForgotPassword';
import SplashScreen from './src/screens/splash/SplashScreen';
import Profile from './src/screens/profile/Profile';
import UpdataPassword from './src/screens/updataPassword/UpdataPassword';
import DonateScreen from './src/screens/donateScreen/DonateScreen';
import MyDonations from './src/screens/myDonations/MyDonations';
import Favorites from './src/screens/favorites/Favorites';
import MyDonationSinglePet from './src/components/myDonationSinglePet/MyDonationSinglePet';
import DonationRequest from './src/screens/donationRequest/DonationRequest';

const App = () => {
  return <DonationRequest />;
};

export default App;

const styles = StyleSheet.create({});
