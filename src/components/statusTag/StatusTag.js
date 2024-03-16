import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../themes/colors';

const StatusTag = ({status}) => {
  const statusStyles = {
    Received: {backgroundColor: colors.babyblue, textColor: colors.primary},
    Error: {backgroundColor: colors.peach, textColor: colors.danger},
    Delivered: {backgroundColor: colors.mint, textColor: colors.forest},
    Canceled: {backgroundColor: colors.cloud, textColor: colors.darkgrey},
    OnHold: {backgroundColor: colors.almond, textColor: colors.orang},
  };

  const defaultStyle = {backgroundColor: colors.white, textColor: colors.black};
  const currentStyle = statusStyles[status] || defaultStyle;

  return (
    <View
      style={[styles.button, {backgroundColor: currentStyle.backgroundColor}]}>
      <Text style={{color: currentStyle.textColor}}>{status}</Text>
    </View>
  );
};

export default StatusTag;
