import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../tab/TabNavigation';
import PetSearch from '../../screens/petSearch/PetSearch';
import Favorites from '../../screens/favorites/Favorites';
import Profile from '../../screens/profile/Profile';
import MyDonations from '../../screens/myDonations/MyDonations';
import DonationRequest from '../../screens/donationRequest/DonationRequest';
import UpdataPassword from '../../screens/updataPassword/UpdataPassword';
import Details from '../../screens/details/Details';
import MyPetDetails from '../../screens/myPetDetails/MyPetDetails';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {DonationPetData, User} from '../../constants/types';
import SearchSinglePet from '../../components/searchSinglePet/SearchSinglePet';
import Login from '../../screens/login/Login';
import SignUp from '../../screens/signUp/SignUp';
import ForgotPassword from '../../screens/forgotPassword/ForgotPassword';
import DonateScreen from '../../screens/donateScreen/DonateScreen';
import DrawerNavigation from '../drawer/DrawerNavigation';
import {fetchUserDataSuccess} from '../../store/slice/userSlice';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

export type RootStackparams = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  Profile: undefined;
  PetSearch: {selectedCategory: string | undefined};
  Favorite: undefined;
  UpdataPassword: undefined;
  MyDonations: undefined;
  DonateScreen: undefined;
  DonationRequest: undefined;
  Details: {pet: DonationPetData};
  SearchSinglePet: undefined;
  MyPetDetails: {pet: DonationPetData};
  DrawerNavigation: undefined;
};

const StackNavigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.user.userData);

  const currentUser = auth().currentUser;

  useEffect(() => {
    dispatch(fetchUserDataSuccess(userData));
  }, [dispatch]);

  return !currentUser ? (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="PetSearch" component={PetSearch} />
      <Stack.Screen name="Favorite" component={Favorites} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyDonations" component={MyDonations} />
      <Stack.Screen name="DonateScreen" component={DonateScreen} />
      <Stack.Screen name="DonationRequest" component={DonationRequest} />
      <Stack.Screen name="UpdataPassword" component={UpdataPassword} />
      <Stack.Screen
        name="SearchSinglePet"
        component={SearchSinglePet}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="MyPetDetails" component={MyPetDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
