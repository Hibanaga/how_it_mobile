import React from 'react';
import styles from './styles';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Counter from '../../components/Counter';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleRedirect = () => navigation.navigate('About');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Counter description="counter: " />
        <Text style={styles.headline}>random content</Text>

        <TouchableOpacity onPress={handleRedirect}>
          <Text>redirect</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
