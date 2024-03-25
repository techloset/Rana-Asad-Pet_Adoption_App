import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoginScreenProps} from '../../constants/types';
import useUpdatePassword from './useUpdatePassword';

const UpdatePassword = ({navigation}: LoginScreenProps) => {
  const {
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    handleUpdatePassword,
    isLoading,
  } = useUpdatePassword({navigation});

  return (
    <ScrollView style={styles.container}>
      <View style={styles.smallContainer}>
        <Text style={styles.label}>Current Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#101C1D"
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#101C1D"
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Text style={styles.label}>Confirm New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#101C1D"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleUpdatePassword}>
          {isLoading ? (
            <ActivityIndicator color="white" size={'large'} />
          ) : (
            <Text style={styles.buttonText}>Update Password</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallContainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 20,
    height: 730,
  },
  label: {
    marginTop: 40,
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
    marginTop: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
