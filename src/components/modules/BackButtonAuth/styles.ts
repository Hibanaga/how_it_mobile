import {StyleSheet} from 'react-native';
import {themes} from '../../../styles/theme';

export default StyleSheet.create({
  button: {
    zIndex: 10,
    position: 'absolute',
    left: '5%',
    backgroundColor: themes.colors.howLighther,
    width: 128,
    height: 56,
    borderRadius: 16,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
