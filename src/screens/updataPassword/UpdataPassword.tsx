import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoginScreenProps} from '../../constants/types';
import useUpdatePassword from './useUpdatePassword';
import {Colors} from '../../constants/color';

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
            Update Password
          </Text>
        </View>
        <Text style={styles.label1}>Current Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholderTextColor={Colors.primary}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholderTextColor={Colors.primary}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Text style={styles.label}>Confirm New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholderTextColor={Colors.primary}
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
    </View>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallContainer: {
    width: '100%',
    paddingHorizontal: '7%',
    marginTop: '10%',
    height: '90%',
  },
  label1: {
    marginTop: '15%',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
  },
  label: {
    marginTop: '7%',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
  },
  input: {
    borderBottomWidth: 2,
    width: '100%',
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
    top: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
