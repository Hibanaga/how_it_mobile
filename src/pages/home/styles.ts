import {StyleSheet} from 'react-native';
import {themes} from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: themes.colors.baseBlack,
  },
  row: {
    height: '97.5%',
    width: '90%',
    justifyContent: 'space-between',
  },
  imageLogo: {
    width: 220,
    height: 220,
    marginHorizontal: 'auto',
    marginTop: 64,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperAction: {},
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
