import React from 'react';
import styles from './styles';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import logoImage from '../../../assets/ios/logo.jpeg';

const Home = () => {
  const navigation = useNavigation();

  const handleRedirect = () => navigation.navigate('LogIn');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        // style={styles.rowWrapper}
        contentContainerStyle={styles.rowWrapper}>
        <View style={styles.row}>
          <View style={styles.wrapper}>
            <Image
              style={styles.imageLogo}
              source={logoImage as ImageSourcePropType}
            />
            <Text style={styles.headline}>HowItWorks</Text>
            <Text style={styles.subHeadline}>Your development assistant</Text>
          </View>

          <View style={styles.wrapperAction}>
            <Button
              onPress={handleRedirect}
              customButtonStyle={styles.button}
              custonButtonContentStyle={styles.buttonContent}
              children="LogIn"
            />
            <Button
              onPress={handleRedirect}
              customButtonStyle={styles.button}
              custonButtonContentStyle={styles.buttonContent}
              children="SigUp"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
