import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {addItem} from '../Actions/ActionItem';
import Button from '../Component/Button';
import c_styles from '../Theme/CommonStyles';

const deviceWidth = Dimensions.get('window').width;

const HomeScreen = props => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();
  const {navigation} = props;

  const addClick = () => {
    dispatch(addItem(item));
    setItem('');
    Keyboard.dismiss();
  };
  return (
    <View style={c_styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.txtTitle}>Enter value</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.inputStyle}
            value={item}
            placeholder="Add Item *"
            returnKeyType="next"
            onChangeText={item => setItem(item)}
            placeholderTextColor="#8b9cb5"
            underlineColorAndroid="#f000"
          />
          <TouchableOpacity
            onPress={() => item !== '' && addClick()}
            style={c_styles.button}>
            <Text style={c_styles.appButtonText}>{'Add'}</Text>
          </TouchableOpacity>
        </View>
        <View style={c_styles.rowView}>
          <Text style={c_styles.txtValue}>Do you want to see the list?</Text>
        </View>
        <Button
          text="Check List"
          onPress={() => navigation.navigate('ListScreen')}
        />
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  innerView: {width: deviceWidth, padding: 30},
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
});
