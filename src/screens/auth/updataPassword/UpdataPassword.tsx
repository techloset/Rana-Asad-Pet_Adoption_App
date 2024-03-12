import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const UpdataPassword = () => {
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
            Update Password
          </Text>
        </View>

        <View>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholderTextColor={'#101C1D'}
            placeholder=""
          />
        </View>
        <View>
          <Text style={styles.label2}>New Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholderTextColor={'#101C1D'}
            placeholder=""
          />
        </View>
        <View>
          <Text style={styles.label2}>New Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholderTextColor={'#101C1D'}
            placeholder=""
          />
        </View>

        <View style={{top: 190}}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdataPassword;

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
