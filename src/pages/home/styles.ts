import {StyleSheet} from 'react-native';
import {themes} from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: themes.colors.baseBlack,
  },
  rowWrapper: {
    flexGrow: 1,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageLogo: {
    width: 220,
    height: 220,
    marginHorizontal: 'auto',
    marginTop: 36,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperAction: {
    marginBottom: 36,
  },
  headline: {
    textAlign: 'center',
    fontSize: themes.sizes.tertiary,
    color: themes.colors.baseWhite,
    fontWeight: 'bold',
  },
  subHeadline: {
    textAlign: 'center',
    color: themes.colors.baseWhite,
  },
  button: {
    marginTop: 24,
    paddingVertical: 12,
    backgroundColor: themes.colors.baseWhite,
  },
  buttonContent: {
    fontSize: themes.sizes.tertiary,
  },
});
