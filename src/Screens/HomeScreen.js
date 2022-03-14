import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getUser} from '../Actions/ActionFile';
import styles from '../Theme/CommonStyles';
const HomeScreen = props => {

  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <View style={styles.main}>
      <Text>Home Screen</Text>
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
