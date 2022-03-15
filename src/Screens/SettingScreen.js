import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../Actions/ActionAuth';
import Button from '../Component/Button';
import c_styles from '../Theme/CommonStyles';

const SettingScreen = props => {
  const userData = useSelector(state => state?.AuthReducer?.userDetail);
  const dispatch = useDispatch();

  return (
    <View style={c_styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.txtTitle}>Enter value</Text>
        <View style={styles.itemView}>
          <Text style={styles.txtHead}>First Name:</Text>
          <Text style={styles.txtValue}>{userData?.fName}</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.txtHead}>Last Name:</Text>
          <Text style={styles.txtValue}>{userData?.lName}</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.txtHead}>Phone:</Text>
          <Text style={styles.txtValue}>{userData?.phone}</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.txtHead}>Email:</Text>
          <Text style={styles.txtValue}>{userData?.email}</Text>
        </View>
        <Button text="Log out" onPress={() => dispatch(logOut())} />
      </View>
    </View>
  );
};
export default SettingScreen;

const styles = StyleSheet.create({
  innerView: {
    width: Dimensions.get('window').width - 30,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemView: {flexDirection: 'row', marginTop: 10},
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 20,
    color: '#041115',
    marginBottom: 20,
  },
  txtHead: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    color: '#041115',
  },
  txtValue: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 20,
    color: '#041115',
    flexWrap: 'wrap',
    flex: 1,
    paddingLeft: 10,
  },
});
