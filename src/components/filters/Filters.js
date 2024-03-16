import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MainButton from '../mainButton/MainButton';
import styles from './styles';
const Filters = ({handleFilterPress, handleAddScanPress}) => {
  const renderRightChild = () => {
    return (
      <Image
        source={require('../../assets/images/scanner.png')}
        resizeMode="contain"
        style={styles.icon}
      />
    );
  };
  const renderAnotherChild = () => {
    return (
      <Image
        source={require('../../assets/images/filter.png')}
        resizeMode="contain"
        style={styles.icon}
      />
    );
  };
  return (
    <View style={styles.btnsWrapper}>
      <MainButton
        variant="half"
        title="Filters"
        rightChild={renderAnotherChild}
        style={styles.btn}
        onPress={handleFilterPress}
        textStyle={styles.txt}
      />
      <MainButton
        variant="half"
        title="Add Scan"
        rightChild={renderRightChild}
        textStyle={styles.title}
        onPress={() => console.warn('Add Scan')}
      />
    </View>
  );
};

export default Filters;
