import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../home/styles';
import {useNavigation} from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();

  const handleRedirect = () => navigation.navigate('Home');

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headline}>about screen</Text>

        <TouchableOpacity onPress={handleRedirect}>
          <Text>redirect to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default About;
