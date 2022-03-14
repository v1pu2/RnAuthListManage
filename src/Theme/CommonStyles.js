import {StyleSheet} from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.color2,
  },

  main: {
    flex: 1,
    backgroundColor: colors.color1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
