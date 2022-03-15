import {StyleSheet} from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.color1,
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
  },
  inputStyle: {
    height: 40,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#eeeeee',
    marginTop: 20,
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
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
export default styles;
