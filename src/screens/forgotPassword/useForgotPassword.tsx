import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {LoginScreenProps} from '../../constants/types';
import {showToast} from '../../components/toast/Toast';

const useForgotPassword = ({navigation}: LoginScreenProps) => {
  const [forgotEmail, setForgotEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRecoverPassword = async () => {
    setIsLoading(true);
    try {
      if (forgotEmail.trim() === '') {
        showToast('error', 'Error', 'Please enter your email');
      } else {
        await auth().sendPasswordResetEmail(forgotEmail);
        showToast(
          'success',
          'Success',
          'Please check your Gmail, forgot password',
        );
        navigation.navigate('Login');
      }
    } catch (error) {
      showToast(
        'error',
        'Error',
        'Failed to recover password. Please try again.',
      );
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
