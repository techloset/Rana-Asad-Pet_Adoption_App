import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {LoginScreenProps} from '../../constants/types';
import useProfile from './useProfile';

const Profile = ({navigation}: LoginScreenProps) => {
  const {
    setNewUserName,
    setNewEmail,
    selectedImage,
    handleImagePicker,
    updateProfile,
    userData,
    handleGoToUpdataPassword,
    isLoading,
  } = useProfile({navigation});

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
          <TouchableOpacity onPress={handleImagePicker}>
            <View style={{alignItems: 'flex-end', top: -50, left: 35}}>
              <Image source={require('../../assets/login/border.png')} />
            </View>
          </TouchableOpacity>
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
            {isLoading ? (
              <ActivityIndicator color="white" size={'large'} />
            ) : (
              <Text style={styles.buttonText}>Update Profile</Text>
            )}
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
