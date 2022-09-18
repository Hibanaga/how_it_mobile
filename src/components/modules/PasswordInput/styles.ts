import {StyleSheet} from 'react-native';
import {themes} from '../../../styles/theme';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 24,
    color: themes.colors.baseWhite,
    backgroundColor: themes.colors.transparent.baseInput,
    fontSize: themes.sizes.tertiaryMiddle,
    width: '87.5%',
    height: 56,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    right: '10%',
    top: '48.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
