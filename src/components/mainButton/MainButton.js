import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from './styles';

const MainButton = ({
  title,
  icon,
  onPress,
  handleSubmit,
  style,
  textStyle,
  navigation,
  variant,
  rightChild,
  disabled,
  isLoading,
}) => {
  const disabledStyle = disabled ? styles.disabledButton : {};

  const buttonStyle =
    variant === 'half'
      ? [styles.button, styles.halfButton, style, disabledStyle]
      : variant === 'small'
      ? [styles.button, styles.smallButton, style, disabledStyle]
      : [styles.button, style, disabledStyle];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={disabled ? null : onPress}
      disabled={disabled}>
      {rightChild ? rightChild() : null}
      {isLoading ? (
        <ActivityIndicator color={'white'} size={'small'} />
      ) : (
        <Text style={[styles.text, { ...textStyle }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;
