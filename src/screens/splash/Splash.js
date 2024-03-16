import React, { useState, useRef, useEffect } from 'react';
import { Animated, Dimensions, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const initialBGColor = '#ffffff';
const logoColor = '#2F50C1';

const Splash = () => {
  const [isLogoPressed, setIsLogoPressed] = useState(false);
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [initialBGColor, logoColor],
  });

  const maxScale = Math.max(width, height) / 140;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: maxScale,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(backgroundColorAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(500),
      ]).start(() => {
        navigation.navigate('Landing');
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [navigation, maxScale, scaleAnim, backgroundColorAnim, opacityAnim]);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.Image
        source={require('../../assets/images/splashLogo.png')}
        resizeMode="contain"
        style={{
          width: 40,
          height: 40,
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim,
        }}
      />
    </Animated.View>
  );
};

export default Splash;
