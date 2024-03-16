import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../assets/images/profileImg.png')}
        style={styles.img}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/images/tintedLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/images/notifications.png')}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;
