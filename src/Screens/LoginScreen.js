import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {getUser, logIn} from '../Actions/ActionAuth';
import Button from '../Component/Button';
import c_styles from '../Theme/CommonStyles';

const deviceWidth = Dimensions.get('window').width;

const LoginScreen = props => {
  const {navigation} = props;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const passRef = useRef();

  const validateEmail = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userEmail) !== true) {
      Alert.alert('Email should be valid');
      return false;
    } else if (userEmail.toLowerCase() !== props.user?.email.toLowerCase()) {
      Alert.alert('User is not registered');
      return false;
    } else {
      return true;
    }
  };
  const isMatchPasswrod = () => {
    if (userPassword.toLowerCase() !== props.user?.password.toLowerCase()) {
      Alert.alert('Password is incorrect');
      return false;
    } else {
      return true;
    }
  };
  const validateLogin = () => {
    userEmail &&
      userEmail !== '' &&
      validateEmail() &&
      isMatchPasswrod() &&
      props.logIn();
  };
  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <KeyboardAvoidingView style={c_styles.container}>
      <View style={styles.topView}>
        <Text style={styles.txtTitle}>Welcome</Text>
        <Text style={c_styles.txtSubTitle}>Sub-title text goes here</Text>
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          style={c_styles.inputStyle}
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
          style={c_styles.inputStyle}
          value={userPassword}
          onChangeText={item => setUserPassword(item)}
          placeholder="Password *"
          placeholderTextColor="#8b9cb5"
          secureTextEntry={true}
        />

        <Button text="Login" onPress={validateLogin} />
        <View style={c_styles.rowView}>
          <Text style={c_styles.txtValue}>Have you not Registered yet?</Text>
        </View>

        <Button
          text="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  return {
    user: state?.AuthReducer?.userDetail,
  };
};
const mapDispatchToProps = {
  getUser,
  logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
const styles = StyleSheet.create({
  topView: {width: deviceWidth, alignItems: 'center'},
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#041115',
  },
  SectionStyle: {
    width: deviceWidth,
    paddingHorizontal: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
});
