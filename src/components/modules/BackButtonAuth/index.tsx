import React, {FC} from 'react';
import Button from '../../Button';
import Icon from 'react-native-vector-icons/Ionicons';
import {themes} from '../../../styles/theme';
import styles from './styles';

interface IBackButtonProsp {
  icon?: string;
  size?: number;
  color?: string;
  onPress: () => void;
}

const BackButton: FC<IBackButtonProsp> = ({
  icon = 'md-arrow-back',
  size = 32,
  color = themes.colors.baseWhite,
  onPress,
}) => {
  return (
    <Button onPress={onPress} customButtonStyle={styles.button}>
      <Icon name={icon} size={size} color={color} />
    </Button>
  );
};

export default BackButton;
