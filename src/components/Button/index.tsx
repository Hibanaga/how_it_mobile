import React, {FC, ReactNode} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface IButtonProps {
  children: ReactNode;
  customButtonStyle?: {[key: string]: string | number};
  custonButtonContentStyle?: {[key: string]: string | number};
  onPress: () => void;
}

const Button: FC<IButtonProps> = ({
  children,
  onPress,
  customButtonStyle,
  custonButtonContentStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, customButtonStyle]}
      onPress={onPress}>
      <Text
        children={children}
        style={[styles.buttonContent, custonButtonContentStyle]}
      />
    </TouchableOpacity>
  );
};

export default Button;
