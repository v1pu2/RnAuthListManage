import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getUser} from '../Actions/ActionFile';
import Colors from '../Theme/Colors';
// import styles from '../Theme/CommonStyles';
const deviceWidth = Dimensions.get('window').width;
const HomeScreen = props => {
  const {navigation} = props;
  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{width: deviceWidth, padding: 30}}>
        <Text style={styles.txtTitle}>Enter value</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.inputStyle}
            value={'userEmail'}
            placeholder="Email Address *"
            keyboardType="email-address"
            returnKeyType="next"
            // onChangeText={item => setUserEmail(item)}
            placeholderTextColor="#8b9cb5"
            underlineColorAndroid="#f000"
          />
          <TouchableOpacity
            // onPress={() => validateLogin()}
            style={styles.button}>
            <Text style={styles.appButtonText}>{'Add'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.txtRemember}>Do you want to see the list?</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.button}>
          <Text style={styles.appButtonText}>{'Check List'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// export default HomeScreen;
const mapStateToProps = state => {
  console.log('state in home-*******-', state?.AuthReducer?.userDetail);
  return {
    user: state?.AuthReducer?.userDetail,
  };
};
const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
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
  inputStyle: {
    flex: 1,
    height: 60,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#eeeeee',
    marginTop: 20,
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
    marginLeft: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  rowView: {
    alignItems: 'center',
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
});
