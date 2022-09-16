import {StyleSheet} from 'react-native';
import {themes} from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.howDefault,
    position: 'relative',
  },
  row: {
    flexGrow: 1,
    backgroundColor: 'red',
  },
  button: {
    position: 'absolute',
    top: '10%',
    left: 0,
    backgroundColor: themes.colors.howLighther,
    width: 128,
    height: 56,
    borderRadius: 16,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {},
});
