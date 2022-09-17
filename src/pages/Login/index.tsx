import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {themes} from '../../styles/theme';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';

const LogIn = () => {
  const navigation = useNavigation();
  const {values, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: () => {},
  });

  const handleRedirect = () => navigation.navigate('Home');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.row}>
        <Button
          onPress={handleRedirect}
          customButtonStyle={styles.navigationButton}>
          <Icon
            name="md-arrow-back"
            size={32}
            color={themes.colors.baseWhite}
          />
        </Button>

        <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
          <TextInput
            placeholderTextColor={themes.colors.transparent.baseText}
            placeholder="Email Address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            autoCorrect={true}
            keyboardType="email-address"
            autoCapitalize="none"
            style={[styles.input]}
          />
          <TextInput
            placeholderTextColor={themes.colors.transparent.baseText}
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            autoCorrect={true}
            keyboardType="email-address"
            autoCapitalize="none"
            style={[styles.input]}
          />

          <Button
            onPress={handleSubmit}
            customButtonStyle={styles.button}
            custonButtonContentStyle={styles.buttonContent}>
            log In
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
