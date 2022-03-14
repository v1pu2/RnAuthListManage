import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {getUser, updateUser} from '../Actions/ActionFile';

import Colors from '../Theme/Colors';

const LoginScreen = props => {
  const {navigation} = props;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const passRef = useRef();

  const validateEmail = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userEmail) === true) {
      return true;
    } else {
      return false;
    }
  };

  const validateLogin = () => {
    // userEmail &&
    //   userEmail !== '' &&
    //   validateEmail() &&
    const data = {
      Fname: props?.user?.Fname,
      email: props?.user?.email,
      password: props?.user?.password,
      isRegistered: props?.user?.isRegistered,
      isLogin: true,
    };

    props.updateUser(data);
    console.log('login click');
  };
  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.txtTitle}>Welcome</Text>
        <Text style={styles.txtSubTitle}>Sub-title text goes here</Text>
        <View style={styles.SectionStyle}>
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

          <TouchableOpacity
            onPress={() => validateLogin()}
            style={styles.button}>
            <Text style={styles.appButtonText}>{'Login'}</Text>
          </TouchableOpacity>

          <View style={styles.rowView}>
            <Text style={styles.txtRemember}>Have you not Registered yet?</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.button}>
            <Text style={styles.appButtonText}>{'Register'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
// export default LoginScreen;
const mapStateToProps = state => {
  console.log('state in home--', state?.AuthReducer?.userDetail);
  return {
    user: state?.AuthReducer?.userDetail,
  };
};
const mapDispatchToProps = {
  getUser,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
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
