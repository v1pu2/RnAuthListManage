import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../Theme/Colors';

export const InitialScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Text style={styles.txtCopy}>Are you a member?</Text>
        <Text style={styles.txtLogin}>Login</Text>
        <Text style={styles.txtCopy}>OR</Text>
        <Text style={styles.txtLogin}>Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.color1,
  },
  iconView: {
    flex: 1,
    justifyContent: 'center',
  },

  txtCopy: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 15,
    color: colors.color0,
    marginTop: 34,
    textAlign: 'center',
  },
  txtLogin: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 15,
    color: colors.color0,
    marginTop: 34,
    textAlign: 'center',
    backgroundColor: colors.color2,
    padding: 10,
  },
});
