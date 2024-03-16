import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import MainButton from '../../components/mainButton/MainButton';
import colors from '../../themes/colors';
const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <MainButton
        title="Login"
        navigation={navigation}
        style={styles.btn}
        textStyle={{ color: colors.primary }}
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};

export default Landing;
