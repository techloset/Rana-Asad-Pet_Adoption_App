import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'No', value: '1'},
  {label: 'Yes', value: '2'},
];
const gender = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
];

const DonateScreen = () => {
  const [value, setValue] = useState(String);

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.secondContainer}>
        <View style={styles.smallContainer}>
          {/* <View>
            <Text style={styles.label}>Pet Type</Text>
            <TextInput style={styles.input} placeholder="" />
          </View> */}
          <View style={styles.containerDropDown}>
            <Text style={styles.label}>Pet Type</Text>
            <Dropdown
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder=""
              value={value}
              onChange={item => {
                setValue(item?.value);
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Pet Breed</Text>
            <TextInput style={styles.input} placeholder="" />
          </View>
          <View>
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder="$"
            />
          </View>

          <View style={styles.containerDropDown}>
            <Text style={styles.label}>Vaccinated</Text>
            <Dropdown
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder=""
              value={value}
              onChange={item => {
                setValue(item?.value);
              }}
            />
          </View>

          {/* <View>
            <Text style={styles.label}>Vaccinated</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder=""
            />
          </View> */}
          {/* <View>
            <Text style={styles.label}>Gender</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder=""
            />
          </View> */}

          <View style={styles.containerDropDown}>
            <Text style={styles.label}>Gender</Text>
            <Dropdown
              data={gender}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder=""
              value={value}
              onChange={item => {
                setValue(item?.value);
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Weight</Text>
            <TextInput
              style={styles.input}
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
            />
          </View>
          <View>
            <Text style={styles.labelDescription}>Description</Text>
            <TextInput
              style={styles.textArea}
              placeholder=""
              multiline
              numberOfLines={4}
            />
          </View>

          <View>
            <Text style={styles.label}>Image</Text>
            <View
              style={{
                height: 161,
                marginTop: 20,
                backgroundColor: '#E2E2E2',
                borderRadius: 20,
                borderColor: '#000000',
                borderWidth: 1,
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 48,
                  height: 48,
                  marginTop: 20,
                  marginLeft: 20,
                }}
                source={require('../../assets/donate/Upload.png')}
              />
              <Text style={{fontSize: 14, fontWeight: '600'}}>
                Upload Image
              </Text>
            </View>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.buttonContainer}>
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
});
