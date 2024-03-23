import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {LoginScreenProps} from '../../constants/types';
import useDonateScreen from './useDonateScreen';

const DonateScreen = ({navigation}: LoginScreenProps) => {
  const {
    selectedImage,
    handleChange,
    handleDonation,
    handleImagePicker,
    handleGoBack,
    petType,
    vaccinatedData,
    genderList,
    state,
  } = useDonateScreen({navigation});

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <View style={{flex: 1}}>
          <Image
            style={{
              width: 25,
              height: 22,
              marginTop: 20,
              marginLeft: 20,
            }}
            source={require('../../assets/login/forgot.png')}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.secondContainer}>
        <View style={styles.smallContainer}>
          <View style={styles.containerDropDown}>
            <Text style={styles.label}>Pet Type</Text>
            <Dropdown
              data={petType}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder=""
              value={state.petType}
              onChange={item => {
                handleChange('petType', item?.value);
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Pet Breed</Text>
            <TextInput
              style={styles.input}
              value={state.petBreed}
              onChangeText={val => handleChange('petBreed', val)}
              placeholder=""
            />
          </View>
          <View>
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder="$"
              value={state.amount}
              onChangeText={val => handleChange('amount', val)}
            />
          </View>

          <View style={styles.containerDropDown}>
            <Text style={styles.label}>Vaccinated</Text>
            <Dropdown
              data={vaccinatedData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder=""
              value={state.vaccinated}
              onChange={item => {
                handleChange('vaccinated', item?.value);
              }}
            />
          </View>

          <View style={styles.containerDropDown}>
            <Text style={styles.label}>Gender</Text>
            <Dropdown
              data={genderList}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder=""
              value={state.gender}
              onChange={item => {
                handleChange('gender', item?.value);
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Weight</Text>
            <TextInput
              style={styles.input}
              value={state.weight}
              onChangeText={val => handleChange('weight', val)}
              placeholderTextColor={'black'}
              placeholder="KG"
            />
          </View>
          <View>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder=""
              value={state.location}
              onChangeText={val => handleChange('location', val)}
            />
          </View>
          <View>
            <Text style={styles.labelDescription}>Description</Text>
            <TextInput
              style={styles.textArea}
              placeholder=""
              multiline
              numberOfLines={4}
              value={state.description}
              onChangeText={val => handleChange('description', val)}
            />
          </View>

          <View>
            <Text style={styles.label}>Image</Text>
            <TouchableOpacity onPress={handleImagePicker}>
              <View style={styles.imageContainer}>
                {selectedImage ? (
                  <Image
                    source={{uri: selectedImage}}
                    style={styles.imagePreview}
                  />
                ) : (
                  <View style={styles.uploadPlaceholder}>
                    <Image
                      source={require('../../assets/donate/Upload.png')}
                      style={styles.uploadIcon}
                    />
                    <Text style={styles.uploadText}>Upload Image</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleDonation}>
              <Text style={styles.buttonText}>Donate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DonateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallContainer: {
    marginTop: 20,
    width: 303,
    flex: 12,
    height: 1117,
  },
  label: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '600',
    color: '#101C1D',
  },
  labelDescription: {
    marginTop: 15,
    fontSize: 18,
    // height: 154,
    fontWeight: '600',
    color: '#101C1D',
  },
  putHeading: {
    marginTop: 7,
    fontSize: 14,
    fontWeight: '600',
    color: '#101C1D',
  },
  forgetPassword: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'right',
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
    height: 79,
    backgroundColor: '#101C1D',
    borderRadius: 37,
    color: 'white',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },

  textArea: {
    borderBottomWidth: 2,
    padding: 10,
    textAlignVertical: 'top',
    marginTop: 15,
    fontSize: 18,
    height: 154,
    fontWeight: '600',
    color: '#101C1D',
  },

  containerDropDown: {
    borderBottomWidth: 2,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },

  // --------------------

  imageContainer: {
    height: 161,
    marginTop: 20,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 20,
  },
  uploadPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    width: 48,
    height: 48,
    marginTop: 20,
    marginLeft: 20,
  },
  uploadText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
