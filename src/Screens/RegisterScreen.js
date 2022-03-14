import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {setUser} from '../Actions/ActionFile';

import Colors from '../Theme/Colors';

const RegisterScreen = props => {
  const {navigation} = props;
  const [userFname, setUserFname] = useState('');
  const [userLname, setUserLname] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfPassword, setUserConfPassword] = useState('');

  const passRef = useRef();

  const validateEmail = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userEmail) === true) {
      return true;
    } else {
      return false;
    }
  };
  const validatePass = () => {
    if (
      userPassword !== '' &&
      userConfPassword !== '' &&
      userPassword === userConfPassword
    ) {
      return true;
    } else {
      Alert.alert('Passwords are not matched');
      return false;
    }
  };
  const validateRegister = () => {
    // userFname !== '' &&
    //   userLname !== '' &&
    //   userPhone !== '' &&
    //   userPassword !== '' &&
    //   userEmail &&
    //   userEmail !== '' &&
    // validateEmail() && validatePass() && navigation.navigate('Login');
    const data = {
      // user: {
      Fname: 'aaa',
      email: 'abc@abc.com',
      password: 'abc123',
      isRegistered: true,
      isLogin: false,
      // },
    };
    console.log('data in register', data);
    props.setUser(data);
    navigation.navigate('Login');
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txtTitle}>Registeration</Text>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={userFname}
              placeholder="Enter First Name *"
              returnKeyType="next"
              // onSubmitEditing={() => {
              //   passRef.current.focus();
              // }}
              onChangeText={item => setUserFname(item)}
              placeholderTextColor="#8b9cb5"
              underlineColorAndroid="#f000"
            />
            <TextInput
              style={styles.inputStyle}
              value={userLname}
              placeholder="Enter Last Name *"
              returnKeyType="next"
              // onSubmitEditing={() => {
              //   passRef.current.focus();
              // }}
              onChangeText={item => setUserLname(item)}
              placeholderTextColor="#8b9cb5"
              underlineColorAndroid="#f000"
            />
            <TextInput
              style={styles.inputStyle}
              value={userPhone}
              placeholder="Enter Phone *"
              keyboardType="number-pad"
              returnKeyType="next"
              // onSubmitEditing={() => {
              //   passRef.current.focus();
              // }}
              onChangeText={item => setUserPhone(item)}
              placeholderTextColor="#8b9cb5"
              underlineColorAndroid="#f000"
            />
            <TextInput
              style={styles.inputStyle}
              value={userEmail}
              placeholder="Email Address *"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => {
                passRef.current.focus();
              }}
              onChangeText={item => setUserEmail(item)}
              placeholderTextColor="#8b9cb5"
              underlineColorAndroid="#f000"
            />

            <TextInput
              ref={passRef}
              style={styles.inputStyle}
              value={userPassword}
              onChangeText={item => setUserPassword(item)}
              placeholder="Password *"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
            />
            <TextInput
              ref={passRef}
              style={styles.inputStyle}
              value={userConfPassword}
              onChangeText={item => setUserConfPassword(item)}
              placeholder="Confirm Password *"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
            />
            <TouchableOpacity
              onPress={() => validateRegister()}
              style={styles.button}>
              <Text style={styles.appButtonText}>{'Register'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const mapStateToProps = state => {
  console.log('state in register--', state);
  return {
    users: state,
  };
};
const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 20,
    color: '#041115',
  },
  txtSubTitle: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,
    color: '#8a979b',
  },
  containerStyle: {
    borderBottomColor: '#efefef',
    height: 30,
    backgroundColor: 'red',
  },
  inputStyle: {
    // flex: 1,
    height: 40,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#eeeeee',
    marginTop: 20,
  },
  SectionStyle: {
    width: 300,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: Colors.color2,
    marginTop: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },

  txtRemember: {
    color: '#111212',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
  },
  iconView: {
    borderWidth: 1,
    borderColor: '#111212',
    marginRight: 5,
    padding: 2,
  },
});
