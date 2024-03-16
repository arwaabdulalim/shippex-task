import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import InputField from '../inputField/inputField';
const Search = () => {
  const renderRightChild = () => {
    return (
      <Image
        source={require('../../assets/images/search.png')}
        resizeMode="contain"
        style={styles.icon}
      />
    );
  };

  return (
    <View>
      <InputField
        rightChild={renderRightChild}
        placeholder="Search"
        containerStyle={styles.container}
      />
    </View>
  );
};

export default Search;
