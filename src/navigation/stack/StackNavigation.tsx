import React, {useState} from 'react';
import Login from '../../screens/login/Login';
import SignUp from '../../screens/signUp/SignUp';
import ForgotPassword from '../../screens/forgotPassword/ForgotPassword';
import Profile from '../../screens/profile/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../tab/TabNavigation';
import PetSearch from '../../screens/petSearch/PetSearch';
import Favorites from '../../screens/favorites/Favorites';
import MyDonations from '../../screens/myDonations/MyDonations';
import DonationRequest from '../../screens/donationRequest/DonationRequest';
import UpdataPassword from '../../screens/updataPassword/UpdataPassword';
import Details from '../../screens/details/Details';
import MyPetDetails from '../../screens/myPetDetails/MyPetDetails';
import {useAppSelector} from '../../store/Store';

const Stack = createNativeStackNavigator();

export type RootStackparams = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  Profile: undefined;
  PetSearch: undefined;
  Favorite: undefined;
  UpdataPassword: undefined;
  MyDonations: undefined;
  DonationRequest: undefined;
  Details: undefined;
  MyPetDetails: undefined;
};

const StackNavigation: React.FC = () => {
  const userData = useAppSelector(state => state.user.userData);

  if (!userData) {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    );
  } else {
    return (
      <>
        <Stack.Navigator
          initialRouteName="TabNavigation"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="PetSearch" component={PetSearch} />
          <Stack.Screen name="Favorite" component={Favorites} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="MyDonations" component={MyDonations} />
          <Stack.Screen name="DonationRequest" component={DonationRequest} />
          <Stack.Screen name="UpdataPassword" component={UpdataPassword} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="MyPetDetails" component={MyPetDetails} />
        </Stack.Navigator>
      </>
    );
  }
};

export default StackNavigation;
