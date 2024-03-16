import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const NavBack = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handleGoBack}>
      <View style={styles.wrapper}>
        <Image
          source={require('../../assets/images/chevron.png')}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.text}>Cancel</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NavBack;
