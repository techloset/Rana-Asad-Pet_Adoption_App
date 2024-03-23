import {Alert} from 'react-native';
import {useEffect, useState} from 'react';
import {LoginScreenProps, UserData} from '../../constants/types';
import {store, useAppDispatch} from '../../store/Store';
import auth from '@react-native-firebase/auth';
import {listenForAuthStateChanges} from '../../store/slice/userSlice';
import {fetchRequestData} from '../../store/slice/requestSlice';

const initialState = {email: '', password: ''};

export const useLogin = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState(initialState);

  const handleChange = (name: string, value: string) => {
    setState(s => ({...s, [name]: value}));
  };

  const handleNavigationToLogin = () => {
    navigation.navigate('SignUp');
  };
  const handleNavigationToForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLogin = async () => {
    let {email, password} = state;

    if (!email) {
      return Alert.alert('please enter email correctly');
    }
    if (password.length < 6) {
      return Alert.alert('please enter password correctly');
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;

      store.dispatch(listenForAuthStateChanges());
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
        console.log('That email address is invalid!');
      } else {
        console.error('Error signing in:', error);
      }
    }
  };

  return {
    state,
    handleChange,
    handleLogin,
    handleNavigationToForgot,
    handleNavigationToLogin,
  };
};

export default useLogin;
