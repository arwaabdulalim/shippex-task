import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import colors from '../../themes/colors';

const FilterItem = ({ filter, isSelected, onToggle }) => {
  const wrapperStyle = isSelected
    ? { borderColor: colors.lavender, borderWidth: 3 }
    : {};
  const textStyle = isSelected ? { color: colors.primary } : {};

  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={[styles.wrapper, wrapperStyle]}>
        <Text style={[styles.text, textStyle]}>{filter}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilterItem;
