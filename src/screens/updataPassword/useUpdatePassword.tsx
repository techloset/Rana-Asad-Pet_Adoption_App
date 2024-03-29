import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {LoginScreenProps} from '../../constants/types';
import {useAppSelector} from '../../store/store';
import firestore from '@react-native-firebase/firestore';
import {showToast} from '../../components/toast/Toast';

const useUpdatePassword = ({navigation}: LoginScreenProps) => {
  const userData = useAppSelector(state => state.user.userData);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdatePassword = async () => {
    setIsLoading(true);
    if (!currentPassword || !newPassword || !confirmPassword) {
      showToast('error', 'Error', 'All fields are required.');
      setIsLoading(false);

      return;
    }

    if (newPassword !== confirmPassword) {
      showToast(
        'error',
        'Error',
        'New password and confirm password do not match',
      );
      setIsLoading(false);
      return;
    }

    try {
      const user = auth().currentUser;
      if (user) {
        const credential = auth.EmailAuthProvider.credential(
          user?.email || '',
          currentPassword,
        );
        await user.reauthenticateWithCredential(credential);
        await user.updatePassword(newPassword);
        await firestore().collection('Users').doc(userData?.uid).update({
          password: newPassword,
        });
        showToast('success', 'Success', 'Password updated successfully');
      }
    } catch (error: any) {
      showToast(
        'error',
        'Error',
        'Failed to update password please enter your data correctly',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    handleUpdatePassword,
    isLoading,
  };
};

export default useUpdatePassword;
