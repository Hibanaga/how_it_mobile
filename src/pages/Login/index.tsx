import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {themes} from '../../styles/theme';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import PasswordInput from '../../components/modules/PasswordInput';

const LogIn = () => {
  const navigation = useNavigation();
  const {values, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: () => {},
  });

  const handleRedirectHome = () => navigation.navigate('Home');
  const handleRedirectSignUp = () => navigation.navigate('SignUp');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.row}>
        <Button
          onPress={handleRedirectHome}
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
          <PasswordInput
            name="password"
            placeholder="Password"
            value={values.password}
            handleChange={() => handleChange('password')}
          />

          <Button
            onPress={handleSubmit}
            customButtonStyle={styles.button}
            custonButtonContentStyle={styles.buttonContent}>
            log In
          </Button>

          <View style={styles.bottomNavigationWrapper}>
            <Text style={styles.bottonNavigationContent}>
              If there is no account yet?{' '}
              <Text
                style={styles.bottomNavigationLink}
                onPress={handleRedirectSignUp}>
                Register
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
