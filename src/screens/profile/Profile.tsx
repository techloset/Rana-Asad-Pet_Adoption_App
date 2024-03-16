import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from 'react-native';
import {LoginScreenProps} from '../../constants/types';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import {useAppSelector} from '../../store/Store';

const Profile = ({navigation}: LoginScreenProps) => {
  const [newUserName, setNewUserName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const userData = useAppSelector(state => state.user.userData);

  const handleGoToUpdataPassword = () => {
    navigation.navigate('UpdataPassword');
  };

  const updateProfile = async () => {
    try {
      const updateImageURL = selectedImage || userData?.photoURL || '';
      const updatedUserName = newUserName || userData?.userName || '';
      const updatedEmail = newEmail || userData?.email || '';

      await firestore().collection('Users').doc(userData?.uid).update({
        userName: updatedUserName,
        photoURL: updateImageURL,
      });

      setNewUserName('');
      setNewEmail('');
      setSelectedImage(null);
      navigation.navigate('Home');
      console.log('Success', 'Profile updated successfully');
    } catch (error: any) {
      console.log('Error', 'Failed to update profile:', error.message);
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.smallContainer}>
        <View>
          <Text
            style={{
              fontWeight: '700',
              textAlign: 'center',
              fontSize: 24,
              color: '#101C1D',
            }}>
            Profile Settings
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity activeOpacity={0.8} onPress={handleImagePicker}>
            <Image
              style={{
                width: 125,
                height: 125,
                marginVertical: 30,
                borderWidth: 1,
                borderRadius: 70,
              }}
              source={{uri: selectedImage || userData?.photoURL}}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'flex-end', top: -50, left: 35}}>
            <Image source={require('../../assets/login/border.png')} />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#101C1D'}
            placeholder={userData?.userName}
            onChangeText={setNewUserName}
          />
        </View>
        <View>
          <Text style={styles.label2}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#101C1D'}
            onChangeText={setNewEmail}
            placeholder={userData?.email}
          />
        </View>
        <View>
          <Text style={styles.label2} onPress={handleGoToUpdataPassword}>
            Update Password
          </Text>
        </View>

        <View style={{top: 130}}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={updateProfile}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallContainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 20,
    height: 660,
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#101C1D',
  },
  label2: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#101C1D',
  },
  input: {
    borderBottomWidth: 2,
    width: 302,
    height: 40,
    color: '#101C1D',
    borderColor: '#101C1D',
    fontSize: 16,
  },

  buttonContainer: {
    width: '100%',
    height: 74,
    backgroundColor: '#101C1D',
    borderRadius: 37,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
