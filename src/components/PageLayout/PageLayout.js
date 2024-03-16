import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PageLayout = ({ navigation, children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Math.max(insets.top, 16),
        backgroundColor: 'red',
      }}>
      {children}
    </View>
  );
};

export default PageLayout;
