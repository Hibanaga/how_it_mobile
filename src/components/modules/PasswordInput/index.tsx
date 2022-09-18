import React, {ChangeEvent, FC, useState} from 'react';
import {TextInput, View} from 'react-native';
import {themes} from '../../../styles/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface IPasswordInputProps {
  handleChange: (field: string) => (e: string | ChangeEvent<any>) => void;
  placeholder: string;
  name: string;
  value: string;
}

const PasswordInput: FC<IPasswordInputProps> = ({
  name,
  placeholder,
  value,
  handleChange,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToggle = () => setIsShowPassword(!isShowPassword);

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholderTextColor={themes.colors.transparent.baseText}
        placeholder={placeholder}
        onChangeText={handleChange(name)}
        value={value}
        autoCorrect={true}
        secureTextEntry={isShowPassword}
        keyboardType="default"
        autoCapitalize="none"
        style={[styles.input]}
        maxLength={22}
      />
      {!isShowPassword ? (
        <Icon
          name="eye"
          size={24}
          color={themes.colors.baseWhite}
          style={styles.icon}
          onPress={handleToggle}
        />
      ) : (
        <Icon
          name="eye-off"
          size={24}
          color={themes.colors.baseWhite}
          style={styles.icon}
          onPress={handleToggle}
        />
      )}
    </View>
  );
};

export default PasswordInput;
