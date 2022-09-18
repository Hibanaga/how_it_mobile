import {StyleSheet} from 'react-native';
import {themes} from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.howDefault,
  },
  row: {
    position: 'relative',
    flexGrow: 1,
    zIndex: 1,
  },
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 24,
    width: '87.5%',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: themes.colors.howLighther,
  },
  buttonContent: {
    alignItems: 'center',
    flex: 1,
    fontSize: themes.sizes.tertiary,
    color: themes.colors.transparent.baseText,
  },
});
