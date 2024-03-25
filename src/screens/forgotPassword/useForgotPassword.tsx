import {useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LoginScreenProps} from '../../constants/types';

const useForgotPassword = ({navigation}: LoginScreenProps) => {
  const [forgotEmail, setForgotEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRecoverPassword = async () => {
    setIsLoading(true);
    try {
      if (forgotEmail.trim() === '') {
        Alert.alert('Error', 'Please enter your email');
      } else {
        await auth().sendPasswordResetEmail(forgotEmail);
        console.log('Password Recovery');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Password recovery failed:', error);
      Alert.alert('Error', 'Failed to recover password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {setForgotEmail, handleRecoverPassword, handleGoBack, isLoading};
};

export default useForgotPassword;
