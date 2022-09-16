import {StyleSheet} from 'react-native';
import {themes} from '../../styles/theme';

export default StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonContent: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: themes.sizes.tertiaryMiddle,
    fontWeight: 'normal',
  },
});
