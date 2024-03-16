import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';
import colors from '../../themes/colors';
const InputField = ({
  navigation,
  width,
  type,
  textStyle,
  keyboardType,
  onPress,
  containerStyle,
  placeholderStyle,
  editable,
  rightChild,
  secureText,
  errorMessage,
  setvalue,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const focusedContainerStyle = isFocused
    ? { borderColor: colors.primary, borderWidth: 1 }
    : {};
  const focusedTextStyle = isFocused ? { color: colors.primary } : {};
  return (
    <View>
      <View
        style={[
          styles.container,
          focusedContainerStyle,
          { ...containerStyle },
        ]}>
        {rightChild ? rightChild() : null}
        <TextInput
          editable={editable}
          style={[
            styles.text,
            focusedTextStyle,
            { ...textStyle },
            placeholderStyle,
          ]}
          {...otherProps}
          keyboardType={keyboardType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureText={secureText}
          onChangeText={setvalue}
          autoCapitalize="none"
        />
      </View>
      {errorMessage && <Text style={styles.errorMsg}>{errorMessage}</Text>}
    </View>
  );
};
export default InputField;
