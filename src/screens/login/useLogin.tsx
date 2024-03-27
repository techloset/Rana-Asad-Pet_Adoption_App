import {Alert, ToastAndroid} from 'react-native';
import {useEffect, useState} from 'react';
import {LoginScreenProps, UserData} from '../../constants/types';
import {store, useAppDispatch} from '../../store/store';
import auth from '@react-native-firebase/auth';
import {listenForAuthStateChanges} from '../../store/slice/userSlice';
import {showToast} from '../../components/toast/Toast';

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
      return showToast('error', 'Error', 'Please enter your email');
    }
    if (password.length < 6) {
      return showToast('error', 'Error', 'Please enter your password');
    }

    setIsLoading(true);

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      // const user = userCredential.user;
      showToast('success', 'Success', 'User login successful');
      store.dispatch(listenForAuthStateChanges());
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        showToast('error', 'Error', 'Invalid email');
      } else {
        showToast('error', 'Error', 'error in login function');
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
