import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {setUser} from '../Actions/ActionAuth';
import Button from '../Component/Button';

import Colors from '../Theme/Colors';
import c_styles from '../Theme/CommonStyles';

const RegisterScreen = props => {
  const {navigation} = props;
  const [userFname, setUserFname] = useState('');
  const [userLname, setUserLname] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfPassword, setUserConfPassword] = useState('');

  const lRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const cPassRef = useRef();

  const validateEmail = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userEmail) === true) {
      return true;
    } else {
      Alert.alert('Please enter valid email');
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
  const storeUserData = () => {
    const data = {
      fName: userFname,
      lName: userLname,
      phone: userPhone,
      email: userEmail,
      password: userPassword,
      isRegistered: true,
    };
    console.log('data in register', data);
    props.setUser(data);
    navigation.navigate('Login');
  };
  const validateRegister = () => {
    userFname !== '' &&
      userLname !== '' &&
      userPhone !== '' &&
      userPassword !== '' &&
      userEmail &&
      userEmail !== '' &&
      validateEmail() &&
      validatePass() &&
      storeUserData();
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <View style={styles.innerView}>
          <Text style={styles.txtTitle}>Registeration</Text>
          <View style={styles.SectionStyle}>
            <TextInput
              style={c_styles.inputStyle}
              value={userFname}
              placeholder="Enter First Name *"
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => {
                lRef.current.focus();
              }}
              onChangeText={item => setUserFname(item)}
              placeholderTextColor="#8b9cb5"
              underlineColorAndroid="#f000"
            />
            <TextInput
              ref={lRef}
              style={c_styles.inputStyle}
              value={userLname}
              placeholder="Enter Last Name *"
              // autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => {
                phoneRef.current.focus();
              }}
              onChangeText={item => setUserLname(item)}
              placeholderTextColor="#8b9cb5"
              underlineColorAndroid="#f000"
            />
            <TextInput
              ref={phoneRef}
              style={c_styles.inputStyle}
              value={userPhone}
              placeholder="Enter Phone *"
              keyboardType="number-pad"
              // autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
              maxLength={10}
              onChangeText={item => setUserPhone(item)}
              placeholderTextColor="#8b9cb5"
              underlineColorAndroid="#f000"
            />
            <TextInput
              ref={emailRef}
              style={c_styles.inputStyle}
              value={userEmail}
              placeholder="Email Address *"
              keyboardType="email-address"
              // autoFocus={true}
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
              style={c_styles.inputStyle}
              value={userPassword}
              onChangeText={item => setUserPassword(item)}
              placeholder="Password *"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
              // autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => {
                cPassRef.current.focus();
              }}
            />
            <TextInput
              ref={cPassRef}
              style={c_styles.inputStyle}
              value={userConfPassword}
              onChangeText={item => setUserConfPassword(item)}
              placeholder="Confirm Password *"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
            />

            <Button text="Register" onPress={validateRegister} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const mapStateToProps = state => {
  // console.log('state in register--', state);
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
    backgroundColor: Colors.color1,
  },
  scrollStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  innerView: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingHorizontal: 80,
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

  SectionStyle: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 80,
    marginTop: 20,
    marginRight: 35,
    margin: 10,
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
