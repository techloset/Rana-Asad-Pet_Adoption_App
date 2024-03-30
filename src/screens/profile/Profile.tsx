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
import {Colors} from '../../constants/color';

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
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <View>
          <Text
            style={{
              fontWeight: '700',
              textAlign: 'center',
              fontSize: 24,
              color: Colors.primary,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Profile Settings
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '41.7%',
              height: 129,
              marginVertical: '9%',
              borderWidth: 1,
              borderStyle: 'dashed',
              padding: 1,
              borderRadius: 70,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderWidth: 1,
                borderRadius: 70,
              }}
              source={{uri: selectedImage || userData?.photoURL}}
            />
          </View>
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
            placeholderTextColor={Colors.primary}
            placeholder={userData?.userName}
            onChangeText={setNewUserName}
          />
        </View>
        <View>
          <Text style={styles.label2}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={Colors.primary}
            onChangeText={setNewEmail}
            placeholder={userData?.email}
          />
        </View>
        <View>
          <Text style={styles.label2} onPress={handleGoToUpdataPassword}>
            Update Password
          </Text>
        </View>

        <View style={{top: '19%'}}>
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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallContainer: {
    width: '100%',
    paddingHorizontal: '7%',
    marginTop: '6%',
    height: '90%',
  },
  label: {
    marginTop: '7%',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat-Bold',
    color: Colors.primary,
  },
  label2: {
    marginTop: '7%',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.primary,
  },
  input: {
    borderBottomWidth: 2,
    width: '100%',
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.primary,
    borderColor: Colors.primary,
    fontSize: 16,
  },

  buttonContainer: {
    width: '100%',
    height: 74,
    backgroundColor: Colors.primary,
    borderRadius: 37,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    fontWeight: '700',
  },
});
