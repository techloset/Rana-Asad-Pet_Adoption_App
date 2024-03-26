import {Alert, ToastAndroid} from 'react-native';
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
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      // const user = userCredential.user;

      store.dispatch(listenForAuthStateChanges());
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        // ToastAndroid.show('invalid email', SHORT);
        // showToast('Error in invalid email', 'error');
        // ToastAndroid.show()
        console.log('invalid email');
      } else {
        // showToast('Error in Login', 'error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    state,
    handleChange,
    handleLogin,
    handleNavigationToForgot,
    handleNavigationToLogin,
    isLoading,
  };
};

export default useLogin;
