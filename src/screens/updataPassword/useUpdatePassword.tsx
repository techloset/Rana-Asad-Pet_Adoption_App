import {useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LoginScreenProps} from '../../constants/types';
import {useAppSelector} from '../../store/Store';
import firestore from '@react-native-firebase/firestore';

const useUpdatePassword = ({navigation}: LoginScreenProps) => {
  const userData = useAppSelector(state => state.user.userData);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdatePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match.');
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
        Alert.alert('Success', 'Password updated successfully.');
        navigation.navigate('Home');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message);
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
  };
};

export default useUpdatePassword;
