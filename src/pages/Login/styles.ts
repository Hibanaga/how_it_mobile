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
  navigationButton: {
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
  wrapper: {
    flex: 1,
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
  button: {
    marginTop: 24,
    width: '87.5%',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: themes.colors.howLighther,
  },
  passwordWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  showPass: {
    position: 'absolute',
    right: '10%',
    top: '48.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    alignItems: 'center',
    flex: 1,
    fontSize: themes.sizes.tertiary,
    color: themes.colors.transparent.baseText,
  },
  bottomNavigationWrapper: {
    marginTop: 12,
  },
  bottonNavigationContent: {
    color: themes.colors.baseWhite,
    fontSize: themes.sizes.tertiaryMiddle,
  },
  bottomNavigationLink: {
    color: themes.colors.contentGrey,
  },
});
