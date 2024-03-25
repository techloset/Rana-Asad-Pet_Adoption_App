import React, {useState} from 'react';
import {LoginScreenProps} from '../../constants/types';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {listenForAuthStateChanges} from '../../store/slice/userSlice';
import storage from '@react-native-firebase/storage';

const useProfile = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const [newUserName, setNewUserName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const userData = useAppSelector(state => state.user.userData);

  const handleGoToUpdataPassword = () => {
    navigation.navigate('UpdataPassword');
  };

  const updateProfile = async () => {
    try {
      let updatedImageURL = userData?.photoURL || '';

      setIsLoading(true);

      if (selectedImage) {
        const imageRef = storage()
          .ref()
          .child(`profile_images/${userData?.uid}`);
        await imageRef.putFile(selectedImage);
        updatedImageURL = await imageRef.getDownloadURL();
      }

      const updatedUserName = newUserName || userData?.userName || '';
      const updatedEmail = newEmail || userData?.email || '';

      await firestore().collection('Users').doc(userData?.uid).update({
        userName: updatedUserName,
        email: updatedEmail,
        photoURL: updatedImageURL,
      });

      dispatch(listenForAuthStateChanges());

      setNewUserName('');
      setNewEmail('');
      setSelectedImage(null);
      navigation.navigate('Home');
      console.log('Success', 'Profile updated successfully');
    } catch (error: any) {
      console.log('Error', 'Failed to update profile:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        includeBase64: false,
        cropperCircleOverlay: true,
      });

      setSelectedImage(image.path);
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  return {
    setNewUserName,
    setNewEmail,
    selectedImage,
    handleImagePicker,
    updateProfile,
    userData,
    handleGoToUpdataPassword,
    isLoading,
  };
};

export default useProfile;
