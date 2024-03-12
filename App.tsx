import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './src/screens/auth/login/Login';
import SignUp from './src/screens/auth/signUp/SignUp';
import ForgotPassword from './src/screens/auth/forgotPassword/ForgotPassword';
import SplashScreen from './src/screens/auth/splash/SplashScreen';
import Profile from './src/screens/auth/profile/Profile';
import UpdataPassword from './src/screens/auth/updataPassword/UpdataPassword';
import DonateScreen from './src/screens/donation/donateScreen/DonateScreen';
import MyDonations from './src/screens/donation/myDonations/MyDonations';
import MyDonationSinglePet from './src/components/myDonationSinglePet/MyDonationSinglePet';
import DonationRequest from './src/screens/donation/donationRequest/DonationRequest';
import MyPetDetails from './src/screens/donation/myPetDetails/MyPetDetails';
import Details from './src/screens/adoption/details/Details';
import SearchBar from './src/components/searchBar/SearchBar';
import PetSearch from './src/screens/adoption/petSearch/PetSearch';
import Home from './src/screens/adoption/home/Home';

const App = () => {
  return <Home />;
};

export default App;

const styles = StyleSheet.create({});
