import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {getUser} from '../Actions/ActionFile';
import {connect} from 'react-redux';

const Navigator = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    props.getUser();
  }, []);
  useEffect(() => {
    console.log('props.user====', props?.user?.isLogin);
    setIsLoggedIn(props?.user?.isLogin);
  }, [props.user]);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    user: state?.AuthReducer?.userDetail,
  };
};
const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
