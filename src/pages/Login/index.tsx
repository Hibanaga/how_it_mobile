import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {themes} from '../../styles/theme';
import Button from '../../components/Button';

const LogIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.row}>
        <Button onPress={() => {}} customButtonStyle={styles.button}>
          <Icon
            name="md-arrow-back"
            size={32}
            color={themes.colors.baseWhite}
          />
        </Button>

        <View />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
