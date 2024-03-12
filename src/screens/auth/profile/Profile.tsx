import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CheckBox, Icon} from 'react-native-elements';

const Profile = () => {
  const [isChecked, setIsChecked] = useState(false);
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
          <ImageBackground
            source={require('../../assets/login/profilePicture.png')}
            style={{
              width: 125,
              height: 125,
              //   borderWidth: 1,
              marginVertical: 30,
              borderStyle: 'dashed',
              borderRadius: 70,
            }}>
            <View
              style={{alignItems: 'flex-end', marginTop: 100, marginRight: 10}}>
              <Image source={require('../../assets/login/border.png')} />
            </View>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#101C1D'}
            placeholder="Muhammad Talha"
          />
        </View>
        <View>
          <Text style={styles.label2}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#101C1D'}
            placeholder="info@techloset.com"
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

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallContainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 20,
    height: 700,
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
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
