import React from 'react';
import styles from './styles';
import {KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native';
import BackButton from '../../components/modules/BackButtonAuth';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import Button from '../../components/Button';

const SignUp = () => {
  const navigation = useNavigation();
  const {values, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {email: '', password: '', confirmPassword: ''},
    onSubmit: () => {},
  });

  const handleRedirectBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.row}>
        <BackButton onPress={handleRedirectBack} />
        <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
          <Button
            onPress={handleSubmit}
            customButtonStyle={styles.button}
            custonButtonContentStyle={styles.buttonContent}
            children="Sign Up"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
