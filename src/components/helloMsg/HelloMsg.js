import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const HelloMsg = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.HelloTxt}>Hello,</Text>
      <Text style={styles.name}>Ibrahim Shaker</Text>
    </View>
  );
};

export default HelloMsg;
